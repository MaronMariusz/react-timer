const SET_ACTIVITY = "SET_ACTIVITY";

/**
 * defaults reducer
 * @param  {Array}  state  Initial state if nothing exists
 * @param  {Object} action Action, data sent
 * @return {Object}        Current state.
 */
export const isRunning = (state = true, action) => {

  switch (action.type) {

    case SET_ACTIVITY:

      return state = action.isRunning;

    default:

      /**
       * In default case return just previous state.
       */
      return state;
      
  }

};
