import {createSelector} from '@reduxjs/toolkit';
import { fromJS } from 'immutable';

export const rootCommon = state => fromJS(state.common);

export const testSelector = createSelector(
  rootCommon,
  data=>data.get('isGettingStarted'),
  );
