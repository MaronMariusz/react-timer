const SET_TIME = "SET_TIME";
const GET_TIME = "GET_TIME";

/**
 * defaults reducer
 * @param  {Array}  state  Initial state if nothing exists
 * @param  {Object} action Action, data sent
 * @return {Object}        Current state.
 */
export const time = (state = 0, action) => {

  switch (action.type) {

    case SET_TIME:

      return action.time;
      
    default:

      /**
       * In default case return just previous state.
       */
      return state;
      
  }

};
