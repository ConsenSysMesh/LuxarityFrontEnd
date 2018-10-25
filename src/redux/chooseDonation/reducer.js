import { createReducer, createLeaf } from 'redux-action-helper'

import {
  CHOOSE_DONATION_STARTED,
  CHOOSE_DONATION_SUCCEEDED,
  CHOOSE_DONATION_FAILED,
} from './actions'

const initialState = {
  running: false,
  response: [],
  error: [],
  success: false,
}

const chooseDonationStarted = createLeaf(CHOOSE_DONATION_STARTED, (state, action) => ({
  ...state,
  running: true,
  response: [],
  error: [],
}))

const chooseDonationSucceeded = createLeaf(CHOOSE_DONATION_SUCCEEDED, (state, action) => ({
  ...state,
  running: false,
  response: action.payload,
  success: true,
}))

const chooseDonationFailed = createLeaf(CHOOSE_DONATION_FAILED, (state, action) => ({
  ...state,
  running: false,
  error: action.payload,
  success: false,
}))

export default createReducer(initialState, {
  chooseDonationStarted,
  chooseDonationSucceeded,
  chooseDonationFailed,
});
