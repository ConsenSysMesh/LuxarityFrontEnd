import { call, put } from 'redux-saga/effects';

import getAPI from '../../util/api';

import {
  GET_ORDER_BY_REDEMPTION_HASH_STARTED,
  GET_ORDER_BY_REDEMPTION_HASH_SUCCEEDED,
  GET_ORDER_BY_REDEMPTION_HASH_FAILED,
} from './actions'

export default function* getOrderByRedemptionHash(action) {
  const api = getAPI('offchain');

  yield put({ type: GET_ORDER_BY_REDEMPTION_HASH_STARTED })

  try {
    const response = yield call(api.post, '/ordersByRedemptionHash', action.payload)
    const data = yield call([response, response.json])
    if (data.status === 'success') {
      yield put({ type: GET_ORDER_BY_REDEMPTION_HASH_SUCCEEDED, payload: data.data })
    } else if (data.status === 'error') {
      console.log('Request error:', data.message);
      yield put({ type: GET_ORDER_BY_REDEMPTION_HASH_FAILED, payload: {code: response.status, message: data.message} })
    }
  } catch (error) {
    console.log('Request error:', error.message);
    yield put({ type: GET_ORDER_BY_REDEMPTION_HASH_FAILED, payload: error.message })
  }
}
