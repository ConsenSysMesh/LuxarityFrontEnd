import Redeem from './Redeem'
//bindors and connectos
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { drizzleConnect } from 'drizzle-react'
//redux actions
import { chooseDonation } from '../../../redux/chooseDonation/actions'
import { redeemOrder } from '../../../redux/redeemOrder/actions'

// connectors for API
const mapStateToProps = state => ({
  choosingDonation: state.chooseDonation.running,
  choseDonation: state.chooseDonation.response !== null,
  chooseDonationError: state.chooseDonation.error,
  chooseDonationSuccess: state.chooseDonation.success,

  redeemingOrder: state.redeemOrder.running,
  redeemedOrder: state.redeemOrder.response,
  redeemOrderError: state.redeemOrder.error,
  redeemOrderSuccess: state.redeemOrder.success,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  chooseDonation,
  redeemOrder,
}, dispatch)

// May still need this even with data function to refresh component on updates for this contract.
//for more on what the hell this is, check out here: https://github.com/trufflesuite/drizzle
const mapDrizzleStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3,
  }
}

const RedeemContainer = drizzleConnect(connect(mapStateToProps, mapDispatchToProps)(Redeem), mapDrizzleStateToProps);

export default RedeemContainer
