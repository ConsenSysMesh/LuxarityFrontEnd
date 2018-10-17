import { createReducer, createLeaf } from 'redux-action-helper'

import {
  MAKE_DONATION_STARTED,
  MAKE_DONATION_SUCCEEDED,
  MAKE_DONATION_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: null,
  error: null,
}

const makeDonationStarted = createLeaf(MAKE_DONATION_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: null,
  error: null,
}))

const makeDonationSucceeded = createLeaf(MAKE_DONATION_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
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
