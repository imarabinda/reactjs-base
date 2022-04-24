import {
  createReducer,
} from '@reduxjs/toolkit'

import {testAction} from './actions';

const initState = {
  isGettingStarted: false,
}

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
const commonReducer = createReducer( initState, (builder) => {
      builder.addCase(testAction,(state,action)=>{
        state.isGettingStarted = action.payload
      })
      .addDefaultCase((state,action)=>{
        return state;
      })
});

export default commonReducer;