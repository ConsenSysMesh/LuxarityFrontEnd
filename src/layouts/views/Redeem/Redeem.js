import React, { Component } from 'react'
//css components
import { Row } from 'react-grid-system'
import Loadable from 'react-loading-overlay'
import { sha256 } from 'js-sha256'
import { Redirect } from 'react-router-dom'; //v4
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import EnterPinSection from '../../components/sections/EnterPinSection'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'
import ProjectCardSimple from '../../components/projectcard/ProjectCardSimple'
//tempData
import testData from '../Support/tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'

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

  mapSections(data) {
    const gridItems = data.map((datum, index) => {

      //select image
      let image;
      let size;
      if (index === 0) {
        image = GreenImg;
        size = '55%';
      } else if (index === 1) {
        image = TanImg;
        size = '55%';
      } else if (index === 2) {
        image = BlueImg;
        size = '55%';
      }

      return (
        <ProjectCardSimple
          key={index}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardPledged={datum.charityPledge}
          charityImage={image}
          charityImageSize={size}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <Row>{gridItems}</Row>
    )
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

            <div className="support-sec" style={{margin: '0 100px'}}>
              <div style={{fontSize: '30px', textAlign: 'center', padding: '100px 0'}}>Three incredible causes to support</div>

              {this.mapSections(testData)}

            </div>

            <LuxarityIsMoreSection />
          </div>
        </Wrapper>
      </Loadable>
    )
  }
}

export default Redeem
