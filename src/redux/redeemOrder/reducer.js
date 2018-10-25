import { createReducer, createLeaf } from 'redux-action-helper'

import {
  REDEEM_ORDER_STARTED,
  REDEEM_ORDER_SUCCEEDED,
  REDEEM_ORDER_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const redeemOrderStarted = createLeaf(REDEEM_ORDER_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const redeemOrderSucceeded = createLeaf(REDEEM_ORDER_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
  success: true,
}))

const redeemOrderFailed = createLeaf(REDEEM_ORDER_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

export default createReducer(initialState, {
  redeemOrderStarted,
  redeemOrderSucceeded,
  redeemOrderFailed,
});
