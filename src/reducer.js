// Application's Reducer where universal state is created

/* If you'd like to integrate Drizzle's reducers and sagas with your existing store,
import them for use alongside your existing reducers. In this example, we already
have react-router-redux keeping the state of react-router in our store. */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
//import { drizzleReducers } from 'drizzle'

import chooseDonation from './redux/chooseDonation/reducer'
import makeDonation from './redux/makeDonation/reducer'
import redeemOrder from './redux/redeemOrder/reducer'
import safeRedeemOrder from './redux/safeRedeemOrder/reducer'
import getDonationsByCause from './redux/donationsByCause/reducer'
import getOrderByRedemptionHash from './redux/ordersByRedemptionHash/reducer'

//...drizzleReducers
const reducer = combineReducers({
  routing: routerReducer,

  chooseDonation,
  makeDonation,
  redeemOrder,
  safeRedeemOrder,
  getDonationsByCause,
  getOrderByRedemptionHash

})

export default reducer
