import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  GET_TOTAL_RAISED_STARTED,
  GET_TOTAL_RAISED_SUCCEEDED,
  GET_TOTAL_RAISED_FAILED,
} from './actions'

export default function* getTotalRaised(action) {
  const api = getAPI('offchain');

  yield put({ type: GET_TOTAL_RAISED_STARTED })

  try {
    const response = yield call(api.get, '/totalDonations', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: GET_TOTAL_RAISED_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: GET_TOTAL_RAISED_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: GET_TOTAL_RAISED_FAILED, payload: error.message })
  }
}
