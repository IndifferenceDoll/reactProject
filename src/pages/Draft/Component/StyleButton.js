
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';// 自定义样式

export default class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = (e) => {
      e.preventDefault();
      props.onToggle(props.style);
    };
  }

  render() {
    let className = styles['RichEditor-styleButton'];
    if (this.props.active) {
      className += ` ${styles['RichEditor-activeButton']}`;
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
StyleButton.propTypes = {
  onToggle: PropTypes.func,
  style: PropTypes.string,
  active: PropTypes.bool,
  label: PropTypes.string,
};

StyleButton.defaultProps = {
  onToggle: () => {},
  active: false,
  label: '',
  style: '',
};
