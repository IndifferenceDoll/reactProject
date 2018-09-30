
/* eslint-disable */
import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';//draft API
// import Immutable from 'immutable';
import styles from './index.css'//自定义样式
import PropTypes from 'prop-types';
import {stateToHTML} from 'draft-js-export-html';//将文本编辑器内容导出为html代码工具
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import ModelView from './ModelView';
// import {contextObj} from './context';// react16.3以上才支持此api

// const {Provider} = contextObj;// react16.3以上才支持此api
export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),//初始化draft富文本对象
          className: styles['RichEditor-editor'],
          htmlStr:''
        };
        this.focus = () => {this.refs.editor.focus()};//使富文本组件获取焦点
        this.onChange = (editorState) => this.setState({ editorState });//更新state中存储的draft富文本对象
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.hidePlaceholder = this._hidePlaceholder.bind(this);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.save = this._save.bind(this);
        this.clean = this._clean.bind(this);
        this.preview = this._preview.bind(this);
        this.getBlockStyle = this._getBlockStyle.bind(this);
        this.closeModelView = this._closeModelView.bind(this)
        this.styleMap = {
          CODE: {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
              fontSize: 16,
              padding: 2,
          },
        };
    }

    _clean(){
      this.setState({
        editorState: EditorState.createEmpty()
      })
      this.htmlStr = '<div style="min-height:1000px;width:800px;font-size:16px;background:white;"></div>'
    }

    transformHtml(){
      const { editorState } = this.state
      let contentState = editorState.getCurrentContent()
      // if (contentState.hasText()) {
          let htmlStr = stateToHTML(contentState);
          this.htmlStr = `<div style="min-height:1000px;width:800px;font-size:16px;background:white;">${htmlStr}</div>`
          console.log('html------',htmlStr)
      // }
    }

    _closeModelView(){
      this.setState({
        htmlStr: ''
      })
    }

    _save() {
      this.transformHtml()
      let htmlStr = this.htmlStr
      //接下来可能调取后端接口
    }
    _preview(){
      this.transformHtml()
      let htmlStr = this.htmlStr
      this.setState({
        htmlStr: htmlStr
      })
    }

    _getBlockStyle(block) {
      switch (block.getType()) {
          case 'blockquote': return styles['RichEditor-blockquote'];
          default: return null;
      }
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    _hidePlaceholder(){
      // // const {editorState} = this.state;
      // let {className} = this.state;
      // console.log('className----',className)
      // // var contentState = editorState.getCurrentContent();
      // // if (!contentState.hasText()) {
      // //     if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      // if(className.indexOf(styles['RichEditor-hidePlaceholder']) === -1) {
      //   className += ' ' + styles['RichEditor-hidePlaceholder'];
      //   this.setState({
      //     className
      //   });
      // }
      // //     }
      // // }
    }


    getChildContext() {
        return {
              name: 'jinyue',
              isFormProvider: true,
            };
    }

    render() {
        return (
          <div>
              <div className={styles["RichEditor-root"]}>
                  {/* <Provider> // react16.3以上才支持此api*/}
                    <BlockStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleBlockType}
                        />
                  {/* </Provider> // react16.3以上才支持此api*/}
                  <InlineStyleControls
                      editorState={this.state.editorState}
                      onToggle={this.toggleInlineStyle}
                  />
                  <button className={styles["operateBtn"]} onClick={this.save}>保存</button>
                  <button className={styles["operateBtn"]} onClick={this.clean}>清除</button>
                  <button className={styles["operateBtn"]} onClick={this.preview}>预览</button>
                  <div className={this.state.className}  onClick={this.focus}>
                      <Editor
                          blockStyleFn={this.getBlockStyle}
                          customStyleMap={this.styleMap}
                          editorState={this.state.editorState}
                          handleKeyCommand={this.handleKeyCommand}
                          onChange={this.onChange}
                          onTab={this.onTab}
                          placeholder="请输入内容..."
                          onFocus={this.hidePlaceholder}
                          ref='editor'
                          spellCheck={true}
                          />
                  </div>
              </div>
              {this.state.htmlStr ? <ModelView closeModelView={this.closeModelView} htmlStr={this.state.htmlStr} /> : null}
            </div>
        );
    }
}
MyEditor.childContextTypes = {
    name: PropTypes.string,
    isFormProvider: PropTypes.bool,
  };
