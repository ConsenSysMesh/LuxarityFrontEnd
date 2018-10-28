import React, { Component } from 'react'
import PropTypes from 'prop-types'
//resources
import web3Utils from 'web3-utils'
import Web3 from 'web3'
import LuxOrder from '../../../../build/contracts/LuxOrders.json'
import { Redirect, withRouter } from 'react-router-dom'; //v4
//css components
import Loadable from 'react-loading-overlay'
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import SupportACauseSection from '../../components/sections/SupportACauseSection'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
import DonationCompleteModal from '../../components/projectcard/DonationCompleteModal'
import MessageModal from '../../components/userfeedback/MessageModal'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'
//tempData
import testData from './tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'
import AllImg from '../../img/tripleFashion.png'

class Support extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      donationAmount: 200,
      splitDonateCount: 0,
      modalMessage: false,
      supportOpen: false,
      donateComplete: false,
      contract: null,
      remainding: null,
      emailHash: null,
      charitiesAllocated: [],
      noAllocationleft: false,
      orderIncomplete: false,
    }

    //bind functions
    this.mapSections = this.mapSections.bind(this)
    this.closeDonateComplete = this.closeDonateComplete.bind(this)
    this.handleMessageClose = this.handleMessageClose.bind(this)
    this.closeSupportModal = this.closeSupportModal.bind(this)
    this.openSplitDonation = this.openSplitDonation.bind(this)
    this.handleSingleDonate = this.handleSingleDonate.bind(this)
  }

  async componentDidMount() {
    if (this.props.location.state.customeremail !== null) {
      //get web3 instance
      let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

      //get abi information
      let abi = LuxOrder.abi
      let contract = await new web3.eth.Contract(abi, "0x365e68BBBd82a639A17eED8c89CCDC5CFeDBd828")

      //check if allocation amount is sufficient to choose a donation
      let emailHash = web3Utils.keccak256(this.props.location.state.customeremail)
      let remainding
      let totalAmount = this.props.location.state.totalcost
      let orderIncomplete
      await contract.methods.buyers(emailHash).call(function(err, res){
        if (err) {
          orderIncomplete = true
        } else {
          let leftover = res[0] - res[1]
          if (leftover >= totalAmount) {
            remainding = totalAmount
          } else {
            remainding = leftover
          }
        }
      })

      //get already chosen allocated amounts for each charity
      let charitiesAllocated = []
      for (let i = 0; i < testData.length; i++) {
        let charityHash = web3Utils.keccak256(testData[i].charityName)
        await contract.methods.charities(charityHash).call(function(err, res){
          if (err) {
            charitiesAllocated.push(0)
          } else {
            charitiesAllocated.push(res[1])
          }
        })
      }

      //update state
      await this.setState({
        contract: contract,
        remainding: remainding,
        emailHash: emailHash,
        charitiesAllocated: charitiesAllocated,
        orderIncomplete: true, 
      })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.chooseDonationError.length === 0 && this.props.chooseDonationError.length !== 0) {
      this.setState({ modalMessage: true })
    }

    if (!prevProps.choosingDonation && this.props.choosingDonation) {
      this.setState({ supportOpen: false })
    }

    if (!prevProps.chooseDonationSuccess && this.props.chooseDonationSuccess) {
      this.setState({ donateComplete: true })
    }

    if (prevProps.choseDonation.length === 0 && this.props.choseDonation.length !== 0) {
      console.log(this.props.choseDonation)
      this.setState({ transaction: this.props.choseDonation })
    }

    //get web3 instance
    let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

    //get abi information
    let abi = LuxOrder.abi
    let contract = await new web3.eth.Contract(abi, "0x365e68BBBd82a639A17eED8c89CCDC5CFeDBd828")

    let charitiesAllocated = []
    for (let i = 0; i < testData.length; i++) {
      let charityHash = web3Utils.keccak256(testData[i].charityName)
      await contract.methods.charities(charityHash).call(function(err, res){
        charitiesAllocated.push(res[1])
      })
    }

    if (!this.arraysEqual(charitiesAllocated, this.state.charitiesAllocated)) {
      this.setState({ charitiesAllocated: charitiesAllocated })
    }

    if (!prevState.donateComplete && this.state.donateComplete) {
      this.setState({ supportOpen: false })
    }
  }

  componentWillUnmount() {
    clearInterval(this.handleSingleDonate)
    clearInterval(this.handleSplitDonate)
  }

  arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
  }

  async handleSingleDonate(order) {
    if (order.remainding !== 0) {
      console.log(order)
      await this.props.chooseDonation(order)
    } else {
      this.setState({ noAllocationleft: true })
    }
  }

  async handleSplitDonate() {
    if (this.state.remainding !== 0) {
      for (let i = 0; i < testData.length; i++) {
        await this.props.chooseDonation({
          customerEmailSHA256: this.props.location.state.customeremail,
          charityName: testData[i].charityName,
          chosenDonateAmount: Math.floor(this.state.remainding/testData.length),
          blockchain: "Rinkeby"
        })
      }
    } else {
      this.setState({ noAllocationleft: true })
    }
  }

  closeDonateComplete() {
    this.setState({ donateComplete: false })
  }

  handleMessageClose() {
    this.setState({ modalMessage: false })
  }

  closeSupportModal() {
    this.setState({ supportOpen: false })
  }

  openSplitDonation() {
    console.log('split donation')
    this.setState({ supportOpen: true })
  }

  mapSections(data) {
    const gridItems = data.map((datum, index) => {

      //orientation
      let orientation = 'right';
      if (index%2 !== 0) {
        orientation = "left"
      }

      //select image
      let image;
      let size;
      if (index === 0) {
        image = GreenImg;
        size = '45% 100%';
      } else if (index === 1) {
        image = TanImg;
        size = '45% 100%';
      } else if (index === 2) {
        image = BlueImg;
        size = '50% 100%';
      }

      //set object
      let orderObject = {
        customerEmailSHA256: this.props.location.state.customeremail,
        charityName: datum.charityName,
        chosenDonateAmount: Math.floor(this.state.remainding),
        blockchain: "Rinkeby"
      }

      return (
        <ProjectCardComplex
          key={index}
          order={orderObject}
          cardOrientation={orientation}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardSummary={datum.charitySummary}
          cardPledged={this.state.charitiesAllocated[index]}
          chooseDonation={this.handleSingleDonate}
          donationAmount={this.props.location.state.totalcost}
          charityImage={image}
          backgroundSizeImg={size}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <div>{gridItems}</div>
    )
  }

  render() {
    if (this.props.location.state.customeremail === null || this.props.location.state.totalcost === null) {
      return (
        <Redirect to={{ pathname: `/redeem`}} />
      );
    }

    return (
      <Wrapper>
        <div>
          <Loadable
            active={this.props.choosingDonation}
            spinner={true}
            spinnerSize={'100px'}
            text={"Processing donation choice!.."}>
            <div>
              <SupportACauseSection
                supportOpen={this.state.supportOpen}
                handleClose={this.closeSupportModal}
                splitDonation={this.openSplitDonation}
                totalOrder={this.props.location.state.totalcost}
                handleDonate={this.handleSplitDonate}
                remainderAmount={this.state.remainding}
                orgs={testData}
                overlayColor={'#CFDBD2'} />
              {this.mapSections(testData)}
            </div>
          </Loadable>
          <LuxarityIsMoreSection />
          <DonationCompleteModal
            transaction={this.state.transaction}
            open={this.state.donateComplete}
            handleClose={this.closeDonateComplete} />
          <MessageModal
            open={this.state.modalMessage || this.state.noAllocationleft}
            handleClose={this.handleMessageClose}
            noAllocationleft={this.state.noAllocationleft}
            orderIncomplete={this.state.orderIncomplete}
            overlayColor={'#bec0be'}
            messageImage={AllImg}
            cardTitle={"Donation Didn't Complete!"}
            cardSubtitle={"Please try again."}
            cardMessage={"Hmm..For some reason your donation choice didn't go through. Please refresh the page and try once more."} />
        </div>
      </Wrapper>
    )
  }
}

Support.contextTypes = {
  drizzle: PropTypes.object
}

export default withRouter(Support)
