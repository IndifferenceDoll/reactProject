/* eslint-disable no-script-url */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';// 自定义样式

export default class ModelView extends React.Component {
  render() {
    const html = { __html: this.props.htmlStr };
    return (
      <div className={styles.modelView}>
        <a href="javascript:void(0);" onClick={this.props.closeModelView} className={styles.close}>关闭</a>
        <div className={styles.previewBox} dangerouslySetInnerHTML={html} />
      </div>
    );
  }
}

ModelView.propTypes = {
  htmlStr: PropTypes.string,
  closeModelView: PropTypes.func,
};

ModelView.defaultProps = {
  htmlStr: '',
  closeModelView: () => {},
};
