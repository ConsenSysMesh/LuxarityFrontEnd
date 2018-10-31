// RootSaga
/* The purpose of this file is to import Drizzle's sagas -
https://www.npmjs.com/package/redux-saga */

import { all, fork, takeLatest, takeEvery } from 'redux-saga/effects'
//import { drizzleSagas } from 'drizzle'

import { CHOOSE_DONATION } from './redux/chooseDonation/actions'
import chooseDonation from './redux/chooseDonation/request'

import { MAKE_DONATION } from './redux/makeDonation/actions'
import makeDonation from './redux/makeDonation/request'

import { REDEEM_ORDER } from './redux/redeemOrder/actions'
import redeemOrder from './redux/redeemOrder/request'

import { SAFE_REDEEM_ORDER } from './redux/safeRedeemOrder/actions'
import safeRedeemOrder from './redux/safeRedeemOrder/request'

import { GET_DONATION_BY_CAUSE } from './redux/donationsByCause/actions'
import getDonationsByCause from './redux/donationsByCause/request'

import { GET_ORDER_BY_REDEMPTION_HASH } from './redux/ordersByRedemptionHash/actions'
import getOrderByRedemptionHash from './redux/ordersByRedemptionHash/request'

export default function* root() {
  yield takeLatest(CHOOSE_DONATION, chooseDonation),
  yield takeLatest(MAKE_DONATION, makeDonation),
  yield takeLatest(REDEEM_ORDER, redeemOrder),
  yield takeLatest(SAFE_REDEEM_ORDER, safeRedeemOrder),
  yield takeLatest(GET_DONATION_BY_CAUSE, getDonationsByCause),
  yield takeLatest(GET_ORDER_BY_REDEMPTION_HASH, getOrderByRedemptionHash)
  /*
  yield all(
    drizzleSagas.map(saga => fork(saga))
  )
  */
}
