import React, { Component } from 'react'
import PropTypes from 'prop-types'
//resources
import web3Utils from 'web3-utils'
import Web3 from 'web3'
import LuxOrder from '../../../../build/contracts/LuxOrders.json'
//css components
import { Row } from 'react-grid-system'
import Loadable from 'react-loading-overlay'
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
      contract: null,
      charitiesAllocated: []
    }

    //bind functions
    this.setPinValue = this.setPinValue.bind(this)
    this.enterPin = this.enterPin.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  async componentDidMount() {
    //get web3 instance
    let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

    //get abi information
    let abi = LuxOrder.abi
    let contract = await new web3.eth.Contract(abi, "0x365e68BBBd82a639A17eED8c89CCDC5CFeDBd828")

    //get already chosen allocated amounts for each charity
    let charitiesAllocated = []
    for (let i = 0; i < testData.length; i++) {
      let charityHash = web3Utils.keccak256(testData[i].charityName)
      await contract.methods.charities(charityHash).call(function(err, res){
        if (err) {
          charitiesAllocated.push(0)
        }
        else {
          charitiesAllocated.push(res[1])
        }
      })
    }

    //update state
    await this.setState({
      contract: contract,
      charitiesAllocated: charitiesAllocated,
    })
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
    let pinHash = await web3Utils.keccak256(this.state.pinValue)
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
      if (index === 0) {
        image = GreenImg;
      } else if (index === 1) {
        image = TanImg;
      } else if (index === 2) {
        image = BlueImg;
      }

      return (
        <ProjectSkinnyCard
          key={index}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardPledged={this.state.charitiesAllocated[index]}
          charityImage={image}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <Row style={{padding: 0, margin: 0, alignItems: 'center', justifyContent: 'center'}}>{gridItems}</Row>
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
        <Wrapper>
          <div>
            <Loadable
              active={this.props.gettingOrderByRedem}
              spinner
              text={"Checking for order..."}>
              <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', paddingTop: 50, paddingBottom: '3%', paddingLeft: 50, paddingRight: 5, margin: 0}}>
                <EnterPinSection enterPin={this.enterPin} setPinValue={this.setPinValue} />
              </Row>
            </Loadable>

            <Loadable
              active={this.state.charitiesAllocated.length === 0}
              spinner
              text={"Loading charities..."}>
              <div style={{alignItems: 'center', justifyContent: 'center'}}>
                <div style={{fontSize: 40, textAlign: 'center', padding: '100px 0'}}>Three incredible causes to support</div>
                {this.mapSections(testData)}
              </div>
            </Loadable>

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
    )
  }
}

Redeem.contextTypes = {
  drizzle: PropTypes.object
}

export default withRouter(Redeem)
