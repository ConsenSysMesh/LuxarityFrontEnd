import React, { Component } from 'react'
//css components
import { sha256 } from 'js-sha256'
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import SupportACauseSection from '../../components/sections/SupportACauseSection'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
import DonationCompleteModal from '../../components/projectcard/DonationCompleteModal'
//tempData
import testData from './tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'

class Support extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      donationAmount: 200,
      donateComplete: false
    }

    //bind functions
    this.mapSections = this.mapSections.bind(this)
    this.chooseDonation = this.chooseDonation.bind(this)
    this.closeDonateComplete = this.closeDonateComplete.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    //not as important to save to state so might change in the future 9/23/18
    if (!prevProps.chooseDonationSuccess && this.props.chooseDonationSuccess) {
      this.setState({ donateComplete: true })
    }
  }

  async chooseDonation(order) {
    await this.props.chooseDonation(order)
    if (this.props.chooseDonationSuccess) {
      this.setState({ donateComplete: true })
    }
  }

  closeDonateComplete() {
    this.setState({ donateComplete: false })
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
      let emailhash = sha256(this.props.match.params.customeremail)
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
        <div>
          <SupportACauseSection
            totalOrder={this.props.match.params.totalcost}
            feeAmount={20}
            orgs={testData}
            overlayColor={'#CFDBD2'}
            donationAmount={200}
            cardCategory={'RESPONSIBLE'}
            cardOrgName={'Cisco Foundation'}
            cardPledged={50000}
            cardGoal={200000}
          />
          {this.mapSections(testData)}
          <DonationCompleteModal
            open={this.state.donateComplete}
            handleClose={this.closeDonateComplete} />
        </div>
      </Wrapper>
    )
  }
}

export default Support
