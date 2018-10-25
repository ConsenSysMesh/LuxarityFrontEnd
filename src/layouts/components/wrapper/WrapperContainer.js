import Wrapper from './Wrapper'
//bindors and connectos
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { drizzleConnect } from 'drizzle-react'
//redux actions

// connectors for API
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

// May still need this even with data function to refresh component on updates for this contract.
//for more on what the hell this is, check out here: https://github.com/trufflesuite/drizzle
const mapDrizzleStateToProps = state => {
  return {

  }
}

const WrapperContainer = drizzleConnect(connect(mapStateToProps, mapDispatchToProps)(Wrapper), mapDrizzleStateToProps);

export default WrapperContainer
