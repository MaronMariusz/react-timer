import React, { Component } from 'react';

export default class Time extends Component {

  render() {
    return (
      <span>{this.props.value}</span>
    );
  }
}
