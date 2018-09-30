
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';// 自定义样式
import StyleButton from './Component/StyleButton';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  // { label: 'Blockquote', style: 'blockquote' },
  // { label: 'UL', style: 'unordered-list-item' },
  // { label: 'OL', style: 'ordered-list-item' },
  // { label: 'Code Block', style: 'code-block' },
];

class BlockStyleControls extends React.Component {
  render() {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    this.blockType = editorState.getCurrentContent ? editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType() : '';
    return (
      <div className={styles['RichEditor-controls']}>
        {BLOCK_TYPES.map(type =>
          (<StyleButton
            key={type.label}
            active={type.style === this.blockType}
            label={type.label}
            onToggle={this.props.onToggle}
            style={type.style}
          />))}
      </div>
    );
  }
}

BlockStyleControls.propTypes = {
  onToggle: PropTypes.func,
  editorState: PropTypes.object,
};

BlockStyleControls.defaultProps = {
  onToggle: () => {},
  editorState: {},
};

export default BlockStyleControls;
