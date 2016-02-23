/**
 * Get method to combine all reducers.
 */
import { combineReducers } from 'redux';

import { time } from './time';
import { isRunning } from './control';

/**
 * Combine all reducers and send it to store.
 * check: store/config.js
 */
export default combineReducers({
	time,
	isRunning
});