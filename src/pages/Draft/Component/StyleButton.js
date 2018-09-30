
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';// 自定义样式
// import { contextObj } from '../context';// react16.3以上才支持此api

// const { Consumer } = contextObj;// react16.3以上才支持此api

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
    // <Consumer>
    //   {
    //     context => (// react16.3以上才支持此api
      <span>
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
        {/* <b>{context.name}</b> // react16.3以上才支持此api */}
        {/* <b>{this.context.name}</b> */}
      </span>
    //       )
    // }
    // </Consumer>// react16.3以上才支持此api
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

StyleButton.contextTypes = {
  name: PropTypes.string,
  isFormProvider: PropTypes.bool,
};
