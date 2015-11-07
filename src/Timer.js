import React, { Component } from 'react';
import Time from './Time';
import TimerButton from './TimerButton';
import AppBar from 'material-ui/lib/app-bar'
import Button from 'material-ui/lib/raised-button'
import Moment from 'moment/moment'

import {defaultTimer, countDownInterval} from './constant'

export default class Timer extends Component {

  constructor() {
    super();

    this.state = {
      counter: defaultTimer,
      play: true,
      pause: false,
      socketConnection: new WebSocket('ws://echo.websocket.org')
    };

  }

  componentWillMount() {
    this.countDown();
  }

  increment(times) {
    this.setState({
      counter: this.state.counter += times
    });
  }

  decrement(times) {
    this.setState({
      counter: this.state.counter -= times
    });
  }

  /**
   * Reset timer to default value.
   */
  clearTimer() {
    this.setState({
      counter: defaultTimer
    })
  }

  /**
   * Timer coundown.
   */
  countDown() {

    /**
     * Make new interval.
     */
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter -= countDownInterval
      })
    }, countDownInterval);
  }

  /**
   * Stop countdown or resume it.
   */
  stopCountDown() {

    /**
     * If timer is paused then tun it again
     */
    if (this.state.pause) {

      /**
       * Change state controls to start.
       */
      this.setState({
        play: true,
        pause: false
      })

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
    this.setState({
      pause: true,
      play: false
    })
  }

  render() {
    return (
      <div className="wrapper">
        <AppBar title="Timer (Material UI)"/>
        <span>
          <TimerButton name="+1" times={1000} action={::this.increment} />
          <TimerButton name="+10" times={10000} action={::this.increment} />
        </span>
        <span>
          <Time className="time" value={this.state.counter} />
        </span>
        <span>
          <TimerButton name="-10" times={10000} action={::this.decrement} />
          <TimerButton name="-1" times={1000} action={::this.decrement} />
          <TimerButton name="Reset" action={::this.clearTimer} />
          <TimerButton name="Pause / Play" action={::this.stopCountDown} />
        </span>
      </div>
    );
  }
}
