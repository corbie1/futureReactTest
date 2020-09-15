import { call, put, all, takeLatest, select, throttle } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';
import {history} from '../history.js'



function* fetchUsersSaga({url}) {
    history.push('/table')
    const data = yield fetch(`${url}`)
    .then(response => response.json());

    yield put(ActionCreator.setData(data, true));

}


export default function* sagaWatcher() {
  yield all([
    takeLatest(ActionType.GET_DATA, fetchUsersSaga)
  ]);
}
