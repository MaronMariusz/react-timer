import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { time, control } from '../actions/';
import store from '../store/config';

// Child components
import Time from '../components/Time';

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
  timeActions: bindActionCreators(time, dispatch),
  controlActions: bindActionCreators(control, dispatch)
});

export class Timer extends Component {

  render() {
    return (
      <div className="container">
        <Time state={this.props.state} timeActions={this.props.timeActions} controlActions={this.props.controlActions} />
      </div>
    );
  }
}

/**
 * Finally connect all together and bind state and actions to the page.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
