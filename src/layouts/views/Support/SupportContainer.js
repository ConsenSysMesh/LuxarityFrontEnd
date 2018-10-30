import Support from './Support'
//bindors and connectos
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { drizzleConnect } from 'drizzle-react'
//redux actions
import { chooseDonation } from '../../../redux/chooseDonation/actions'
import { getOrderByRedemptionHash } from '../../../redux/ordersByRedemptionHash/actions'

// connectors for API
const mapStateToProps = state => ({
  choosingDonation: state.chooseDonation.running,
  choseDonation: state.chooseDonation.response,
  chooseDonationError: state.chooseDonation.error,
  chooseDonationSuccess: state.chooseDonation.success,

  gettingOrderByRedem: state.getOrderByRedemptionHash.running,
  gotOrderByRedem: state.getOrderByRedemptionHash.response,
  getOrderByRedemError: state.getOrderByRedemptionHash.error,
  getOrderByRedemSuccess: state.getOrderByRedemptionHash.success,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  chooseDonation: chooseDonation
}, dispatch)

// May still need this even with data function to refresh component on updates for this contract.
//for more on what the hell this is, check out here: https://github.com/trufflesuite/drizzle
const mapDrizzleStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    web3: state.web3,
    LuxOrders: state.contracts.LuxOrders,
  }
}

const SupportContainer = drizzleConnect(connect(mapStateToProps, mapDispatchToProps)(Support), mapDrizzleStateToProps);

export default SupportContainer
