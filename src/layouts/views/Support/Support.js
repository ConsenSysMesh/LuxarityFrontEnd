import React, { Component } from 'react'
//css components
import { sha256 } from 'js-sha256'
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
      donateComplete: false,
      splitDonateCount: 0,
      modalMessage: false,
      supportOpen: false,
    }

    //bind functions
    this.mapSections = this.mapSections.bind(this)
    this.chooseDonation = this.chooseDonation.bind(this)
    this.closeDonateComplete = this.closeDonateComplete.bind(this)
    this.handleDonate = this.handleDonate.bind(this)
    this.handleMessageClose = this.handleMessageClose.bind(this)
    this.closeSupportModal = this.closeSupportModal.bind(this)
    this.splitDonation = this.splitDonation.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.chooseDonationSuccess && this.props.chooseDonationSuccess && this.state.splitDonateCount === 3) {
      this.setState({ donateComplete: true })
    }

    if (prevProps.chooseDonationError.length === 0 && this.props.chooseDonationError.length !== 0) {
      this.setState({ modalMessage: true })
    }

    if (!prevProps.choosingDonation && this.props.choosingDonation) {
      this.setState({ supportOpen: false })
    }
  }

  async chooseDonation(order) {
    await this.props.chooseDonation(order)
    if (this.props.chooseDonationSuccess) {
      this.setState({ donateComplete: true })
    }
  }

  async handleDonate() {
    console.log("onDonate")
    for (let i = 0; i < testData.length; i++) {
      await this.props.chooseDonation({
        "customerEmailSHA256": "0xe58e151a26e02da3c87c04685390219fdad1790462511124a11f44c9d06eeb03",
        "charityName": testData[i].charityName,
        "chosenDonateAmount": this.props.location.state.totalcost/testData.length,
        "blockchain": "Rinkeby"
      })
      this.setState({ splitDonateCount: this.state.splitDonateCount++ })
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

  splitDonation() {
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
      console.log(this.props.location.state.customeremail)
      let emailhash = sha256(this.props.location.state.customeremail)
      let orderObject = {
        "customerEmailSHA256": emailhash,
        "charityName": datum.charityName,
        "chosenDonateAmount": 200,
        "blockchain": "rinkeby"
      }

      return (
        <ProjectCardComplex
          key={index}
          chooseDonation={this.chooseDonation}
          order={orderObject}
          cardOrientation={orientation}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardSummary={datum.charitySummary}
          cardPledged={datum.charityPledge}
          donationAmount={200}
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
              splitDonation={this.splitDonation}
              totalOrder={this.props.location.state.totalcost}
              handleDonate={this.handleDonate}
              feeAmount={0}
              orgs={testData}
              overlayColor={'#CFDBD2'}
              cardPledged={50000}
              cardGoal={200000} />
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

export default Support
