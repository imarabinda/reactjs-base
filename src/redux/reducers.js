import { combineReducers } from 'redux';
import commonReducer from '../modules/common/reducer';

const rootReducers = combineReducers({
common:commonReducer,
});

export default rootReducers;