import { all } from 'redux-saga/effects';
import commonSaga from '../modules/common/saga';

export default function* rootSagas() {
    yield all([
        commonSaga(),
    ]);
}