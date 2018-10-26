import React, { Component } from 'react'
//css components
import { Row } from 'react-grid-system'
import Loadable from 'react-loading-overlay'
import { sha256 } from 'js-sha256'
import { Redirect, withRouter } from 'react-router-dom'; //v4
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import EnterPinSection from '../../components/sections/EnterPinSection'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'
import MessageModal from '../../components/userfeedback/MessageModal'
import ProjectSkinnyCard from '../../components/projectcard/ProjectSkinnyCard'
//tempData
import testData from '../Support/tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'
import AllImg from '../../img/tripleFashion.png'

class Redeem extends Component {
  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      pinValue: '',
      messageModal: false,
    }

    //bind functions
    this.setPinValue = this.setPinValue.bind(this)
    this.enterPin = this.enterPin.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    //not as important to save to state so might change in the future 9/23/18
    if (prevProps.getOrderByRedemError.length === 0 && this.props.getOrderByRedemError.length > 0) {
      this.setState({ messageModal: true })
    }
  }

  async enterPin(event) {
    //prevent default after press
    event.preventDefault();
    //prepare data
    let pinHash = sha256(this.state.pinValue)
    console.log(pinHash)
    //need to replace with actual entry data**
    await this.props.getOrderByRedemptionHash('12345')
  }

  setPinValue(pin) {
    console.log(pin)
    this.setState({ pinValue: pin })
  }

  handleClose() {
    this.setState({ messageModal: false })
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
        <ProjectSkinnyCard
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
    if (this.props.getOrderByRedemSuccess && this.props.gotOrderByRedem !== null) {
      return (
        <Redirect
          to={{
            pathname: `/support/${this.props.gotOrderByRedem[0].orderid}`,
            state: {
              orderId: this.props.gotOrderByRedem[0].orderid,
              orderNumber: this.props.gotOrderByRedem[0].ordernumber,
              totalcost: this.props.gotOrderByRedem[0].totalcost,
              customeremail: this.props.gotOrderByRedem[0].customeremail,
            }
          }}
        />
      );
    }

    return (
      <Loadable
        active={this.props.gettingOrderByRedem}
        spinner
        text={"Checking for order..."}>
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
            <MessageModal
              open={this.state.messageModal}
              handleClose={this.handleClose}
              overlayColor={'#bec0be'}
              messageImage={AllImg}
              cardTitle={"Oops! Wrong Pin!"}
              cardSubtitle={"Please try again."}
              cardMessage={"This doesn't quite match any pin codes on record. Please try again and make sure there aren't any rogue spaces or letters in your entry."} />
          </div>
        </Wrapper>
      </Loadable>
    )
  }
}

export default withRouter(Redeem)
