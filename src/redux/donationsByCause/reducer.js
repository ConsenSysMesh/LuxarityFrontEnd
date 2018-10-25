import { createReducer, createLeaf } from 'redux-action-helper'

import {
  GET_DONATION_BY_CAUSE_STARTED,
  GET_DONATION_BY_CAUSE_SUCCEEDED,
  GET_DONATION_BY_CAUSE_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const getDonationByCauseStarted = createLeaf(GET_DONATION_BY_CAUSE_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const getDonationByCauseSucceeded = createLeaf(GET_DONATION_BY_CAUSE_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
  success: true,
}))

const getDonationByCauseFailed = createLeaf(GET_DONATION_BY_CAUSE_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

export default createReducer(initialState, {
  getDonationByCauseStarted,
  getDonationByCauseSucceeded,
  getDonationByCauseFailed,
});
