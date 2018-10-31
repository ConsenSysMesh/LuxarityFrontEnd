import Redeem from './Redeem'
//bindors and connectos
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { drizzleConnect } from 'drizzle-react'
//redux actions
import { getOrderByRedemptionHash } from '../../../redux/ordersByRedemptionHash/actions'

// connectors for API
const mapStateToProps = state => ({
  gettingOrderByRedem: state.getOrderByRedemptionHash.running,
  gotOrderByRedem: state.getOrderByRedemptionHash.response,
  getOrderByRedemError: state.getOrderByRedemptionHash.error,
  getOrderByRedemSuccess: state.getOrderByRedemptionHash.success,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrderByRedemptionHash: getOrderByRedemptionHash,
}, dispatch)

// May still need this even with data function to refresh component on updates for this contract.
//for more on what the hell this is, check out here: https://github.com/trufflesuite/drizzle
const mapDrizzleStateToProps = state => {
  return {
  }
}

const RedeemContainer = drizzleConnect(connect(mapStateToProps, mapDispatchToProps)(Redeem), mapDrizzleStateToProps);

export default RedeemContainer
