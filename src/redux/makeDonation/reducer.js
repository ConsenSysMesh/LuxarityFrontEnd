import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  MAKE_DONATION_STARTED,
  MAKE_DONATION_SUCCEEDED,
  MAKE_DONATION_FAILED,
} from './actions'

export default function* makeDonation(action) {
  const api = getAPI('onchain');

  yield put({ type: MAKE_DONATION_STARTED })

  try {
    const response = yield call(api.post, '/makeDonation', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: MAKE_DONATION_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: MAKE_DONATION_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: MAKE_DONATION_FAILED, payload: error.message })
  }
}
