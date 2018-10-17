import { createReducer, createLeaf } from 'redux-action-helper'

import {
  REDEEM_ORDER_STARTED,
  REDEEM_ORDER_SUCCEEDED,
  REDEEM_ORDER_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: null,
  error: null,
}

const redeemOrderStarted = createLeaf(REDEEM_ORDER_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: null,
  error: null,
}))

const redeemOrderSucceeded = createLeaf(REDEEM_ORDER_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
}))

const redeemOrderFailed = createLeaf(REDEEM_ORDER_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
}))

export default createReducer(initialState, {
  redeemOrderStarted,
  redeemOrderSucceeded,
  redeemOrderFailed,
});
