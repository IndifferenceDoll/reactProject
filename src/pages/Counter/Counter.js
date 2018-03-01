import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>当前计数为{this.props.counter.count}</div>
        <button onClick={
                    () => {
                        this.props.increment();
                    }
                }
        >自增
        </button>
        <button onClick={
                    () => {
                        this.props.decrement();
                    }
                }
        >自减
        </button>
        <button onClick={
                    () => {
                        this.props.reset();
                    }
                }
        >重置
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
  reset: () => {
    dispatch(reset());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
