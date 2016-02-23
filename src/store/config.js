/**
 * Get method to create new store.
 */
import { createStore } from 'redux';

/**
 * Import combined reducers.
 * index.js is taken automatically here.
 */
import actions from '../reducers/';

/**
 * Create store and export it as a default.
 */
export default createStore(actions);
