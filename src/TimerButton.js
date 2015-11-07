import React, { Component } from 'react';

export default class TimerButton extends Component {
  render() {
    return (
      <button onClick={this.props.action.bind(this, this.props.times)} >{this.props.name}</button>
    );
  }
}
