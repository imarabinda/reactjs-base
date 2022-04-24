import {put, call, takeEvery, select} from 'redux-saga/effects';
import { testSelector } from './selectors';
import {testAction} from './actions';
import { testService } from './services';

function* testSaga({payload}){
//  const testSelect = yield select(testSelector);
//  console.log(testSelect,`Payload: ${payload}`);
//  yield put(testAction(server));
//  const server = yield call(testService,{test:testSelect});
//  console.log(server);
}

export default function* commonSaga() {
// yield takeEvery(testAction,testSaga)
}