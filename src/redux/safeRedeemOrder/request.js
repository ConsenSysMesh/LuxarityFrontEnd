import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  SAFE_REDEEM_ORDER_STARTED,
  SAFE_REDEEM_ORDER_SUCCEEDED,
  SAFE_REDEEM_ORDER_FAILED,
} from './actions'

export default function* safeRedeemOrder(action) {
  const api = getAPI('onchain');

  yield put({ type: SAFE_REDEEM_ORDER_STARTED })

  try {
    const response = yield call(api.post, '/safeRedeemOrder', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: SAFE_REDEEM_ORDER_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: SAFE_REDEEM_ORDER_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: SAFE_REDEEM_ORDER_FAILED, payload: error.message })
  }
}
