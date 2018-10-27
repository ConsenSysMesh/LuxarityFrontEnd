import React, { Component } from 'react'
import PropTypes from 'prop-types'
//resources
import web3Utils from 'web3-utils'
//css components
import Loadable from 'react-loading-overlay'
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import SupportACauseSection from '../../components/sections/SupportACauseSection'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
import DonationCompleteModal from '../../components/projectcard/DonationCompleteModal'
import MessageModal from '../../components/userfeedback/MessageModal'
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
    //get web3 instance
    let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

    //get abi information
    let abi = LuxOrder.abi
    let contract = await new web3.eth.Contract(abi, "0x365e68BBBd82a639A17eED8c89CCDC5CFeDBd828");
    contract.methods.orderIndex().call(function(err, res){
      console.log(res)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chooseDonationError.length === 0 && this.props.chooseDonationError.length !== 0) {
      this.setState({ modalMessage: true })
    }

    if (!prevProps.choosingDonation && this.props.choosingDonation) {
      this.setState({ supportOpen: false })
    }

    if (!prevProps.chooseDonationSuccess && this.props.chooseDonationSuccess) {
      this.setState({ donateComplete: true })
    }
  }

  async handleSingleDonate(order) {
    await this.props.chooseDonation(order)
  }

  async handleSplitDonate() {
    //check if allocation amount is sufficient to choose a donation
      //if it is do for loop
      //if it is not then show message
    let emailHash = await web3Utils.keccak256(this.props.location.state.customeremail)
    //test value for emailHash: "0xe58e151a26e02da3c87c04685390219fdad1790462511124a11f44c9d06eeb03"
    for (let i = 0; i < testData.length; i++) {
      await this.props.chooseDonation({
        customerEmailSHA256: emailHash,
        charityName: testData[i].charityName,
        chosenDonateAmount: this.props.location.state.totalcost/testData.length,
        blockchain: "Rinkeby"
      })
    }

    //need to add amountAllocated to orders table as a column
    //and after successful allocation set that amount to zero here
      //TBD
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
      let emailhash = web3Utils.keccak256(this.props.location.state.customeremail)
      let orderObject = {
        customerEmailSHA256: emailhash,
        charityName: datum.charityName,
        chosenDonateAmount: this.props.location.state.totalcost,
        blockchain: "rinkeby"
      }

      return (
        <ProjectCardComplex
          key={index}
          order={orderObject}
          cardOrientation={orientation}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardSummary={datum.charitySummary}
          cardPledged={datum.charityPledge}
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
    return (
      <Wrapper>
        <Loadable
          active={this.props.choosingDonation}
          spinner={true}
          spinnerSize={'100px'}
          text={"Checking for order..."}>
          <div>
            <SupportACauseSection
              supportOpen={this.state.supportOpen}
              handleClose={this.closeSupportModal}
              splitDonation={this.openSplitDonation}
              totalOrder={this.props.location.state.totalcost}
              handleDonate={this.handleSplitDonate}
              feeAmount={0}
              orgs={testData}
              overlayColor={'#CFDBD2'}
              cardPledged={10000}
              cardGoal={35000} />
            {this.mapSections(testData)}
            <DonationCompleteModal
              open={this.state.donateComplete}
              handleClose={this.closeDonateComplete} />
            <MessageModal
              open={this.state.modalMessage}
              handleClose={this.handleMessageClose}
              overlayColor={'#bec0be'}
              messageImage={AllImg}
              cardTitle={"Donation Didn't Complete!"}
              cardSubtitle={"Please try again."}
              cardMessage={"Hmm..For some reason your donation choice didn't go through. Please refresh the page and try once more."} />
          </div>
        </Loadable>
      </Wrapper>
    )
  }
}

Support.contextTypes = {
  drizzle: PropTypes.object
}

export default Support
