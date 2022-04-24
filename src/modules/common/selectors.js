import {createSelector} from '@reduxjs/toolkit';
import { fromJS } from 'immutable';
import { LIGHT_THEME } from '../../configs/constants';

export const rootCommon = state => fromJS(state.common);
  
export const themeSelector = createSelector(
  rootCommon,
  data=>data.get('theme') || LIGHT_THEME,
  );
