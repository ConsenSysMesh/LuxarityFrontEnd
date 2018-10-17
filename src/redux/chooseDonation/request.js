import { createReducer, createLeaf } from 'redux-action-helper'

import {
  CHOOSE_DONATION_STARTED,
  CHOOSE_DONATION_SUCCEEDED,
  CHOOSE_DONATION_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: null,
  error: null,
}

const chooseDonationStarted = createLeaf(CHOOSE_DONATION_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: null,
  error: null,
}))

const chooseDonationSucceeded = createLeaf(CHOOSE_DONATION_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
}))

const chooseDonationFailed = createLeaf(CHOOSE_DONATION_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
}))

export default createReducer(initialState, {
  chooseDonationStarted,
  chooseDonationSucceeded,
  chooseDonationFailed,
});
