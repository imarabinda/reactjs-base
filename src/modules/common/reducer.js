import {
  createReducer,
} from '@reduxjs/toolkit'
import { DARK_THEME, LIGHT_THEME } from '../../configs/constants';
import {switchMode} from './actions';

const initState = {
  theme:LIGHT_THEME
}

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
const commonReducer = createReducer( initState, (builder) => {
      builder
      .addCase(switchMode,(state,action)=>{
        state.theme = action.payload != null ? action.payload : state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      })
      .addDefaultCase((state,action)=>{
        return state;
      })
});

export default commonReducer;