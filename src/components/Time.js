import React, { Component } from 'react';
import Moment from 'moment/moment';

export default class Time extends Component {

  render() {

  	const time = Moment.duration(this.props.value);
  	const hours = time.hours();
  	const minutes = time.minutes();
  	const seconds = time.seconds();

    return (
    	<div>
        <span>{hours}</span>
    		<span>{minutes}:</span>
    		<span>{seconds}</span>
    	</div>
    );
  }
}
