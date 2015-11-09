import React, { Component } from 'react';
import Moment from 'moment/moment';

export default class Time extends Component {

  render() {
    return (
      <h1>{Moment(this.props.value).format(this.props.format)}</h1>
    );
  }
}
