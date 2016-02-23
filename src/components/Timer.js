import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { time, control } from '../actions/';
import store from '../store/config';

// Child components
import Time from '../components/Time';
import TimerButton from '../components/TimerButton';

// To move...
import {defaultTimer, countDownInterval} from '../constant'

/**
 * Send state as props
 * @param  {Object} state current state
 * @return {Object}       state object
 */
const mapStateToProps = (state) => ({
  state
});

/**
 * Send dispatchers as props
 * @param  {Object} dispatch current action
 * @return {Object}          actions object
 */
const mapDispatchToProps = (dispatch) => ({
  timeAction: bindActionCreators(time, dispatch),
  controlAction: bindActionCreators(control, dispatch)
});

export class Timer extends Component {

  constructor(props) {
    super(props);
    this.props.timeAction.setTime(defaultTimer);
    this.props.controlAction.setActivity(true); // Make it more configurable.
  }

  getTime() {
    return this.props.state.time;
  }

  componentWillMount() {
    this.countDown();
  }

  increment(times) {
    let time = this.getTime();
    this.props.timeAction.setTime(time += times);
  }

  decrement(times) {
    let time = this.getTime();
    this.props.timeAction.setTime(time -= times);
  }

  /**
   * Reset timer to default value.
   */
  clearTimer() {
    this.props.timeAction.setTime(defaultTimer);
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
      this.props.timeAction.setTime(time - countDownInterval);
    }, countDownInterval);
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
      this.props.controlAction.setActivity(true); // Make it more configurable.


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
    this.props.controlAction.setActivity(false); // Make it more configurable.
  }

  render() {
    return (
      <div className="container">
          <h1> React Timer Component</h1>
          <div className="row ">
            <div className="col-xs-12">

              <h4>Controls:</h4>
              <TimerButton name="+1" times={1000} action={::this.increment} />
              <TimerButton name="+10" times={10000} action={::this.increment} />
              <TimerButton name="-10" times={10000} action={::this.decrement} />
              <TimerButton name="-1" times={1000} action={::this.decrement} />
              <TimerButton name="Reset" action={::this.clearTimer} />
              <TimerButton name="Pause || Play" action={::this.stopCountDown} />
              <h4>Count Down:</h4>
              <Time className="time" value={this.getTime()} format={"hh:mm:ss"} />

            </div>
          </div>
      </div>
    );
  }
}

/**
 * Finally connect all together and bind state and actions to the page.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
