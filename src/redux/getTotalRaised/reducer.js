import { createReducer, createLeaf } from 'redux-action-helper'

import {
  GET_TOTAL_RAISED_STARTED,
  GET_TOTAL_RAISED_SUCCEEDED,
  GET_TOTAL_RAISED_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const getTotalRaisedStarted = createLeaf(GET_TOTAL_RAISED_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const getTotalRaisedSucceeded = createLeaf(GET_TOTAL_RAISED_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
  success: true,
}))

const getTotalRaisedFailed = createLeaf(GET_TOTAL_RAISED_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

export default createReducer(initialState, {
  getTotalRaisedStarted,
  getTotalRaisedSucceeded,
  getTotalRaisedFailed,
});
