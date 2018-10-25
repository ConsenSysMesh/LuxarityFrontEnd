import React, { Component } from 'react'
//css components
import { Row } from 'react-grid-system'
import Loadable from 'react-loading-overlay'
import { sha256 } from 'js-sha256'
import { Redirect } from 'react-router-dom'; //v4
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import EnterPinSection from '../../components/sections/EnterPinSection'
import AllFashionSection from '../../components/sections/AllFashionSection'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'

class Redeem extends Component {
  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      pinValue: '',
    }

    //bind functions
    this.setPinValue = this.setPinValue.bind(this)
    this.enterPin = this.enterPin.bind(this)
  }

  async enterPin(event) {
    //prevent default after press
    event.preventDefault();
    //prepare data
    let pinHash = sha256(this.state.pinValue)
    console.log(pinHash)
    await this.props.getOrderByRedemptionHash(pinHash)
  }

  setPinValue(pin) {
    console.log(pin)
    this.setState({ pinValue: pin })
  }

  render() {
    if (this.props.getOrderByRedemSuccess) {
      return (
        <Redirect
          to={{
            pathname: `/support/${this.props.gotOrderByRedem.orderid}`,
            state: {
              orderId: this.props.gotOrderByRedem.orderid,
              orderNumber: this.props.gotOrderByRedem.ordernumber,
              totalcost: this.props.gotOrderByRedem.totalcost,
              customeremail: this.props.gotOrderByRedem.customeremail, 
            }
          }}
        />
      );
    }

    return (
      <Loadable
        active={this.props.gettingOrderByRedem}
        spinner
        text='Checking for order...'>
        <Wrapper>
          <div>
            <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', paddingTop: '3%', paddingBottom: '3%', paddingLeft: 20, paddingRight: 5, margin: 0}}>
              <EnterPinSection enterPin={this.enterPin} setPinValue={this.setPinValue} />
            </Row>
            <AllFashionSection />
            <LuxarityIsMoreSection />
          </div>
        </Wrapper>
      </Loadable>
    )
  }
}

export default Redeem
