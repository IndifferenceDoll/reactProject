
import React, { Component } from 'react';

// 样式 style={某变量} className="变量名"
function Blocks(props) {
  // 根据规模动态设置子块样式
  const divStyle = {
    width: props.scale * 61,
    height: props.scale * 61,
    borderLeft: '1px solid black',
    borderTop: '1px solid black',
    margin: 0,
    padding: 0,
    fontSize: 0,
  };
  const pStyle = {
    width: 60,
    height: 60,
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '60px',
  };
  // 根据规模计算块总数
  const scales = props.scale ** 2;
  // 生成子块中的数字
  const numArr = [];
  function randomNum() {
    const num = Math.random() * scales;
    const usedNum = Math.ceil(num);
    if (numArr.length >= scales) {
      return;
    }
    if (numArr.indexOf(usedNum) < 0) {
      numArr.push(usedNum);
    }
    randomNum();
  }
  randomNum();
  // 生成子块，并填入子块数组
  const blocks = [];
  for (let i = 0; i < scales; i++) {
    blocks.push(<p style={pStyle} key={i}>{numArr[i]}</p>);
  }
  // 渲染
  return (
    <div style={divStyle}>
      {blocks}
    </div>
  );
}
const btnStyle = {
  cursor: 'pointer',
  marginLeft: '20px',
  background: '#22aff4',
  outline: 'none',
  border: 'none',
  color: 'white',
  padding: '3px 13px',
  borderRadius: '3px',
};
const btnHoverStyle = {
  cursor: 'pointer',
  marginLeft: '20px',
  background: 'gray',
  outline: 'none',
  border: 'none',
  color: 'black',
  padding: '3px 13px',
  borderRadius: '3px',
};
export default class Schulte extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: 5, isHover: false };
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.beforeHover = this.beforeHover.bind(this);
    this.afterHover = this.afterHover.bind(this);
  }
  handleChange(e) {
    const hasPoint = e.target.value.indexOf('.') >= 0;
    const value = Number(e.target.value);
    const isNaN = Number.isNaN(value);
    if (isNaN || hasPoint || (value > 30)) {
      return;
    }
    this.setState({ scale: Math.floor(e.target.value) });
  }
  reset() { // 需要进一步处理，实现根据当前规模重置
    this.setState({ scale: 5 });
  }
  afterHover() { // 执行时不出发scale的重置
    this.setState({ isHover: true });
  }
  beforeHover() { // 执行时不出发scale的重置
    this.setState({ isHover: false });
  }
  render() {
    return (
      <div>
        <p>请输入生成规模：
          <input type="text" value={this.state.scale} onChange={this.handleChange} />
          <button
            style={this.state.isHover ? btnHoverStyle : btnStyle}
            onMouseEnter={this.afterHover}
            onMouseLeave={this.beforeHover}
            onClick={this.reset}
          >重置
          </button>
        </p>
        <Blocks scale={this.state.scale} />
      </div>
    );
  }
}
