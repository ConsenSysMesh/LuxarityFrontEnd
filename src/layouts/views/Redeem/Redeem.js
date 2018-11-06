import React, { Component } from 'react'
import PropTypes from 'prop-types'
//resources
import web3Utils from 'web3-utils'
import Web3 from 'web3'
import { sha256 } from 'js-sha256'
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
import GreenImg from '../../img/lux0030.jpg'
import TanImg from '../../img/lux0609.jpg'
import BlueImg from '../../img/lux0783.jpg'
import AllImg from '../../img/tripleFashion.png'

class Redeem extends Component {
  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      pinValue: '',
      messageModal: false,
      contract: null,
      charitiesAllocated: [],
      totalRaised: 0,
      totalChosenDonatedAmount: 0,
    }

    //bind functions
    this.setPinValue = this.setPinValue.bind(this)
    this.enterPin = this.enterPin.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  async componentDidMount() {
    //get web3 instance
    let web3 = await new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL))

    //get abi information
    let abi = LuxOrder.abi
    let contract = await new web3.eth.Contract(abi, "0xa4c69450f2dea4a10a7e799674feda99c9af9732")

    //get already chosen allocated amounts for each charity
    let charitiesAllocated = []
    for (let i = 0; i < testData.length; i++) {
      let charityHash = web3Utils.keccak256(testData[i].charityName)
      await contract.methods.charities(charityHash).call(function(err, res){
        if (err) {
          charitiesAllocated.push(0)
        }
        else {
          console.log(res)
          charitiesAllocated.push(Number(res.amountChosenToDonate))
        }
      })
    }

    //extra use case (both)
    console.log(charitiesAllocated)
    let charityHashSplit = web3Utils.keccak256(testData[0].charityName + "," + testData[2].charityName)
    await contract.methods.charities(charityHashSplit).call(function(err, res){
      if (err || !res.exists) {
        charitiesAllocated.push(0)
      } else {
        console.log(res.amountChosenToDonate/2)
        charitiesAllocated[0] += Number(res.amountChosenToDonate/2)
        charitiesAllocated[2] += Number(res.amountChosenToDonate/2)
      }
    })

    charitiesAllocated[0] -= 206792
    charitiesAllocated[2] -= 88113

    //get total raised
    await this.props.getTotalRaised()

    /*
    let totalRaised
    await contract.methods.totalRaised().call(function(err, res){
      if (err) {
        totalRaised = charitiesAllocated[0] + charitiesAllocated[1] + 150000
      }
      else {
        console.log(res)
        totalRaised = res - 206792 - 88113
        console.log(totalRaised)
      }
    })


    let totalChosenDonatedAmount
    await contract.methods.totalChosenDonatedAmount().call(function(err, res){
      if (err) {
        totalChosenDonatedAmount = charitiesAllocated[0] + charitiesAllocated[1] + 150000
      }
      else {
        console.log(res)
        totalChosenDonatedAmount = res - 206792 - 88113
        console.log(totalChosenDonatedAmount)
      }
    })
    */

    //update state
    await this.setState({
      contract: contract,
      charitiesAllocated: charitiesAllocated,
      //totalChosenDonatedAmount: totalChosenDonatedAmount,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    //not as important to save to state so might change in the future 9/23/18
    if (prevProps.getOrderByRedemError.length === 0 && this.props.getOrderByRedemError.length > 0) {
      this.setState({ messageModal: true })
    }

    if (!prevProps.getTotalRaisedSuccess && this.props.getTotalRaisedSuccess) {
      this.setState({ totalRaised: Number(this.props.gotTotalRaised[0].sum) + 2000 })
    }
  }

  async enterPin(event) {
    //prevent default after press
    event.preventDefault();
    //prepare data
    let pinString = this.state.pinValue.toString()
    let pinHash = sha256(pinString)
    console.log(pinHash)
    //need to replace with actual entry data**
    await this.props.getOrderByRedemptionHash(pinHash.toUpperCase())
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
      let image
      let pledge
      if (index === 0) {
        image = GreenImg
        pledge = this.state.charitiesAllocated[index]
      } else if (index === 1) {
        image = TanImg
        pledge = testData[1].charityPledge
      } else if (index === 2) {
        image = BlueImg
        pledge = this.state.charitiesAllocated[index]
      }
      console.log(datum)
      return (
        <ProjectSkinnyCard
          key={index}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.cuaseName}
          charityURL={datum.charityURL}
          cardPledged={pledge}
          charityImage={image}
          cardAltGoal={datum.charityAltGoal}
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
              active={this.props.gettingOrderByRedem || this.props.gettingTotalRaised}
              spinner
              text={"Loading...Please wait."}>
              <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', paddingTop: 50, paddingBottom: '3%', paddingLeft: '3%', paddingRight: 5, margin: 0}}>
                <EnterPinSection
                  totalRaised={this.state.totalRaised}
                  enterPin={this.enterPin}
                  setPinValue={this.setPinValue} />
              </Row>
            </Loadable>

            <Loadable
              active={this.state.charitiesAllocated.length === 0}
              spinner
              text={"Loading charities..."}>
              <div style={{alignItems: 'center', justifyContent: 'center'}}>
                <div id="raw" style={{fontSize: 40, textAlign: 'center', paddingTop:100, paddingBottom: 20, color: "rgb(190, 192, 190)", fontFamily: 'Boysen Regular'}}>R.A.W. Grant Partners</div>
                <p style={{fontSize: 20, textAlign: 'center', paddingLeft: '15%', paddingRight: '15%', paddingBottom: 40, color: "rgb(190, 192, 190)"}}>We are raising grants that address social and environmental challenges across the United Nation’s Sustainable Development Goals of: #12 Responsible Consumption & Production, #3 Health & Well-being & #4 Quality Education, aligning with our mission to build a community that shares the R.A.W. values.</p>
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
