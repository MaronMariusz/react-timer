import React, { Component } from 'react';
import Moment from 'moment/moment';

import TimerButton from './TimerButton';

// Configuration
import timerConfig from '../config/default';

export default class Time extends Component {

  constructor(props) {
    super(props);
    this.validateButtonFields();
    this.props.timeActions.setTime(timerConfig.defaultTimeValue);
    this.props.controlActions.setActivity(true); // Make it more configurable.
  }

  getTime() {
    return this.props.state.time;
  }

  componentWillMount() {
    this.countDown();
  }

  increment(times) {
    let time = this.getTime();
    this.props.timeActions.setTime(time += times);
  }

  decrement(times) {
    let time = this.getTime();
    this.props.timeActions.setTime(time -= times);
  }

  /**
   * Reset timer to default value.
   */
  clearTimer() {
    this.props.timeActions.setTime(timerConfig.defaultTimeValue);
  }

  /**
   * Timer coundown.
   */
  countDown() {

    /**
     * Make new interval.
     */
    this.interval = setInterval(() => {
      const time = this.getTime();
      this.props.timeActions.setTime(time - timerConfig.countDownInterval);
    }, timerConfig.countDownInterval);
  }

  /**
   * Stop countdown or resume it.
   */
  stopCountDown() {

    /**
     * If timer is paused then tun it again
     */
    if (!this.props.state.isRunning) {

      /**
       * Change state controls to start.
       */
      this.props.controlActions.setActivity(true); // Make it more configurable.


      /**
       * Run countdown.
       */
      return this.countDown();
    }

    /**
     * If timer is running, clear it and set state controls.
     */
    clearInterval(this.interval);
    this.interval;

    /**
     * Change state controls to stop.
     */
    this.props.controlActions.setActivity(false); // Make it more configurable.
  }

  getFormattedTime() {

    const time = Moment.duration(this.getTime());
    const hours = time.hours();
    const minutes = time.minutes();
    const seconds = time.seconds();

    return {
      hours,
      minutes,
      seconds
    }
  }

  validateButtonFields() {

    // Validate buttons props
    timerConfig.buttons.forEach(field => {

      // Label field check
      if (typeof field.label === 'undefined') throw Error('Button config has missed label field.');
      if (typeof field.label !== 'string') throw Error('Value for label in configuration should be string');

      // Action field check
      if (typeof field.action === 'undefined') throw Error('Button config has missed action field.');
      if (typeof this[field.action] !== 'function') throw Error(field.action + ' is not defined in ' + this.constructor.name + ' class');
    });

  }

  getButtons() {
    return timerConfig.buttons.map((btn, index) => {
      return <TimerButton key={index} name={btn.label} times={btn.resolveWith || null} action={::this[btn.action]} />
    })
  }

  play() {}
  resume() {}
  stop() {}
  reset() {}

  render() {

    const currentTime = this.getFormattedTime();
    const navigation = this.getButtons();

    return (
      <div className="container">
        <h1> React Timer Component</h1>
        <div className="row ">
          <div className="col-xs-12">

            <h4>Controls:</h4>
            {navigation}
            <h4>Count Down:</h4>
            <span>{currentTime.hours}</span>
            <span>{currentTime.minutes}:</span>
            <span>{currentTime.seconds}</span>
          </div>
        </div>
      </div>
    );
  }
}
