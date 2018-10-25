import { createReducer, createLeaf } from 'redux-action-helper'

import {
  MAKE_DONATION_STARTED,
  MAKE_DONATION_SUCCEEDED,
  MAKE_DONATION_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const makeDonationStarted = createLeaf(MAKE_DONATION_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const makeDonationSucceeded = createLeaf(MAKE_DONATION_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

const makeDonationFailed = createLeaf(MAKE_DONATION_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
}))

export default createReducer(initialState, {
  makeDonationStarted,
  makeDonationSucceeded,
  makeDonationFailed,
});
