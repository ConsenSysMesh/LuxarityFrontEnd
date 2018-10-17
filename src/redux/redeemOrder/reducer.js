import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  REDEEM_ORDER_STARTED,
  REDEEM_ORDER_SUCCEEDED,
  REDEEM_ORDER_FAILED,
} from './actions'

export default function* redeemOrder(action) {
  const api = getAPI();

  yield put({ type: REDEEM_ORDER_STARTED })

  try {
    const response = yield call(api.post, '/redeemOrder', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: REDEEM_ORDER_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: REDEEM_ORDER_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: REDEEM_ORDER_FAILED, payload: error.message })
  }
}
