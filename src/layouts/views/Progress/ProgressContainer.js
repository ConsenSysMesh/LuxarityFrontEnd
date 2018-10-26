import Progress from './Progress'
//bindors and connectos
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { drizzleConnect } from 'drizzle-react'
//redux actions
import { chooseDonation } from '../../../redux/chooseDonation/actions'

// connectors for API
const mapStateToProps = state => ({
  choosingDonation: state.chooseDonation.running,
  choseDonation: state.chooseDonation.response !== null,
  chooseDonationError: state.chooseDonation.error,
  chooseDonationSuccess: state.chooseDonation.success,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  chooseDonation: chooseDonation
}, dispatch)

// May still need this even with data function to refresh component on updates for this contract.
//for more on what the hell this is, check out here: https://github.com/trufflesuite/drizzle
const mapDrizzleStateToProps = state => {
  return {

  }
}

const ProgressContainer = drizzleConnect(connect(mapStateToProps, mapDispatchToProps)(Progress), mapDrizzleStateToProps);

export default ProgressContainer
