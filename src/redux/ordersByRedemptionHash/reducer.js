import { createReducer, createLeaf } from 'redux-action-helper'

import {
  GET_ORDER_BY_REDEMPTION_HASH_STARTED,
  GET_ORDER_BY_REDEMPTION_HASH_SUCCEEDED,
  GET_ORDER_BY_REDEMPTION_HASH_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const getOrderByRedemStarted = createLeaf(GET_ORDER_BY_REDEMPTION_HASH_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const getOrderByRedemSucceeded = createLeaf(GET_ORDER_BY_REDEMPTION_HASH_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
  success: true,
}))

const getOrderByRedemFailed = createLeaf(GET_ORDER_BY_REDEMPTION_HASH_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

export default createReducer(initialState, {
  getOrderByRedemStarted,
  getOrderByRedemSucceeded,
  getOrderByRedemFailed,
});
