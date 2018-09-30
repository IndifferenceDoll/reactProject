
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';// 自定义样式
import StyleButton from './Component/StyleButton';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  // { label: 'Monospace', style: 'CODE' },
];

export default class InlineStyleControls extends React.Component {
  render() {
    const currentStyle = this.props.editorState.getCurrentInlineStyle();
    return (
      <div className={styles['RichEditor-controls']}>
        {INLINE_STYLES.map(type =>
          (<StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={this.props.onToggle}
            style={type.style}
          />))}
      </div>
    );
  }
}

InlineStyleControls.propTypes = {
  onToggle: PropTypes.func,
  editorState: PropTypes.object,
};

InlineStyleControls.defaultProps = {
  onToggle: () => {},
  editorState: {},
};
