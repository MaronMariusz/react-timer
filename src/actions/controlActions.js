/**
 * This file is for defining dispatcher actions.
 * Can be sorted by component.
 */

const SET_ACTIVITY = "SET_ACTIVITY";

/**
 * Set config at start
 * @param  {Boolean} isRunning   current activity
 * @return {Object}        		 state with settings
 */
export const setActivity = (isRunning) => {

  return {
    type: SET_ACTIVITY,
    isRunning
  };

};
