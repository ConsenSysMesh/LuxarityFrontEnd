import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  GET_DONATION_BY_CAUSE_STARTED,
  GET_DONATION_BY_CAUSE_SUCCEEDED,
  GET_DONATION_BY_CAUSE_FAILED,
} from './actions'

export default function* getDonationsByCause(action) {
  const api = getAPI('offchain');

  yield put({ type: GET_DONATION_BY_CAUSE_STARTED })

  try {
    const response = yield call(api.post, '/donationsByCause', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: GET_DONATION_BY_CAUSE_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: GET_DONATION_BY_CAUSE_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: GET_DONATION_BY_CAUSE_FAILED, payload: error.message })
  }
}
