import React, { Component } from 'react';

export default class TimerButton extends Component {

  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <button className="btn btn-default" onClick={this.props.action.bind(this, this.props.times)} >{this.props.name}</button>
    );
  }
}
