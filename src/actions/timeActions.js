/**
 * This file is for defining dispatcher actions.
 * Can be sorted by component.
 */

const SET_TIME = "SET_TIME";
const GET_TIME = "GET_TIME";

/**
 * Set config at start
 * @param  {Object} data   current time
 * @return {Object}        set time value
 */
export const setTime = (time) => {

  return {
    type: SET_TIME,
    time
  };

};

/**
 * get defaults...
 * @return {Object}            get time
 */
export const getTime = () => {

  return {
    type: GET_TIME
  };

};
