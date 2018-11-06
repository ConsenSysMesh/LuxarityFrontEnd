import React, { Component } from 'react'
import PropTypes from 'prop-types'
//resources
import web3Utils from 'web3-utils'
import { sha256 } from 'js-sha256'
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
import GreenImg from '../../img/lux0030.jpg'
import TanImg from '../../img/lux0609.jpg'
import BlueImg from '../../img/lux0783.jpg'
import AllImg from '../../img/tripleFashion.png'

class Support extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      donationAmount: 200,
      splitDonate: false,
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
    this.handleSplitDonate = this.handleSplitDonate.bind(this)
  }

  async componentDidMount() {
    await this.update('componentDidMount')
  }

  async update(message) {
    //console.log(message)
    if (this.props.location.state.customeremail !== null && this.props.gotOrderByRedem.length !== 0) {

      //get web3 instance
      let web3 = await new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL))

      //get abi information
      let abi = LuxOrder.abi
      let contract = await new web3.eth.Contract(abi, "0xa4c69450f2dea4a10a7e799674feda99c9af9732")

      //check if allocation amount is sufficient to choose a donation
      let emailHash = sha256(this.props.location.state.customeremail)
      let finalHash = web3Utils.keccak256(emailHash.toUpperCase())
      let remainding
      let totalAmount = Number(this.props.location.state.totalcost)
      let orderIncomplete

      //console.log(contract)

      //check the buyers donation allocation remaining
      await contract.methods.buyers(finalHash).call(function(err, res){
        if (err) {
          orderIncomplete = true
        } else {
          console.log(res)
          let leftover = res[0] - res[1]
          if (leftover >= totalAmount) {
            remainding = totalAmount
          } else {
            remainding = leftover
          }
        }
      })

      //check if the chooseDonations struct exists
      let orderNumber = Number(this.props.gotOrderByRedem[0].ordernumber)
      let noAllocation = false
      //console.log(contract.methods)
      await contract.methods.choseDonations(orderNumber).call(function(err, res){
        if (err) {
          orderIncomplete = true
          //console.log(err)
        } else {
          //console.log(res)
          //choose donation has been made before
          if (res[1] >= totalAmount) {
            remainding = 0
            noAllocation = true
          } else {
            remainding = totalAmount - res[1]
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
          }
          else {
            //console.log(res)
            charitiesAllocated.push(Number(res.amountChosenToDonate))
          }
        })
      }

      //extra use case (both)
      //console.log(charitiesAllocated)
      let charityHashSplit = web3Utils.keccak256(testData[0].charityName + "," + testData[2].charityName)
      await contract.methods.charities(charityHashSplit).call(function(err, res){
        if (err || !res.exists) {
          charitiesAllocated.push(0)
        } else {
          //console.log(res.amountChosenToDonate/2)
          charitiesAllocated[0] += Number(res.amountChosenToDonate/2)
          charitiesAllocated[2] += Number(res.amountChosenToDonate/2)
        }
      })

      charitiesAllocated[0] -= 206792
      charitiesAllocated[2] -= 88113

      //update state
      await this.setState({
        contract: contract,
        remainding: remainding,
        emailHash: emailHash,
        charitiesAllocated: charitiesAllocated,
        orderIncomplete: orderIncomplete,
        noAllocationleft: noAllocation,
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
      await this.update('componentDidUpdate')
    }

    if (prevProps.choseDonation.length === 0 && this.props.choseDonation.length !== 0) {
      //console.log(this.props.choseDonation)
      this.setState({ transaction: this.props.choseDonation })
    }

    //get web3 instance
    let web3 = await new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/dafcac3faf174e009483337759967f85"))

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
          //console.log(res)
          charitiesAllocated.push(Number(res.amountChosenToDonate))
        }
      })
    }

    //extra use case (both)
    //console.log(charitiesAllocated)
    let charityHashSplit = web3Utils.keccak256(testData[0].charityName + "," + testData[2].charityName)
    await contract.methods.charities(charityHashSplit).call(function(err, res){
      if (err || !res.exists) {
        charitiesAllocated.push(0)
      } else {
        //console.log(res.amountChosenToDonate/2)
        charitiesAllocated[0] += Number(res.amountChosenToDonate/2)
        charitiesAllocated[2] += Number(res.amountChosenToDonate/2)
      }
    })

    charitiesAllocated[0] -= 206792
    charitiesAllocated[2] -= 88113

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
    clearInterval(this.arraysEqual)
    clearInterval(this.closeDonateComplete)
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
    console.log(order)
    await this.setState({ supportOpen: false })
    if (order.remainding !== 0) {
      console.log(order)
      await this.props.chooseDonation(order)
      if (this.props.chooseDonationSuccess) {
        await this.update('handleSingleDonate')
      }
      await this.setState({ noAllocationleft: true })
    } else {
      this.setState({ noAllocationleft: true })
    }
  }

  async handleSplitDonate(remainding) {
    await this.setState({ splitDonate: true })
    //make the transaction
    if (remainding !== 0) {
      //make donation object (use delimiter and make it once chosend donation
      let donation = {
        customerEmailSHA256: sha256(this.props.location.state.customeremail).toUpperCase(),
        charityName: testData[0].charityName + "," + testData[2].charityName,
        chosenDonateAmount: Math.floor(this.state.remainding),
        orderNumber: Number(this.props.gotOrderByRedem[0].ordernumber),
        tokenId: Number(this.props.gotOrderByRedem[0].tokenid),
        orderId: Number(this.props.gotOrderByRedem[0].orderid),
        blockchain: "Rinkeby"
      }

      await this.props.chooseDonation(donation)

      if (this.props.chooseDonationSuccess) {
        await this.update('handleSplitDonate')
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
      let image
      let size
      let pledge
      if (index === 0) {
        image = GreenImg
        size = '30% 100%'
        pledge = this.state.charitiesAllocated[index]
      } else if (index === 1) {
        image = TanImg
        size = '30% 100%'
        pledge = testData[index].charityPledge
      } else if (index === 2) {
        image = BlueImg
        size = '30% 100%'
        pledge = this.state.charitiesAllocated[index]
      }

      //set object
      let orderObject = {
        customerEmailSHA256: sha256(this.props.location.state.customeremail).toUpperCase(),
        charityName: datum.charityName,
        chosenDonateAmount: Math.floor(this.state.remainding),
        orderNumber: Number(this.props.gotOrderByRedem[0].ordernumber),
        tokenId: Number(this.props.gotOrderByRedem[0].tokenid),
        orderId: Number(this.props.gotOrderByRedem[0].orderid),
        blockchain: "Rinkeby"
      }

      return (
        <ProjectCardComplex
          key={index}
          charityURL={datum.charityURL}
          choosingDonationNow={this.props.choosingDonation}
          index={index}
          order={orderObject}
          cardOrientation={orientation}
          noAllocationleft={this.state.noAllocationleft}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.cuaseName}
          cardSummary={datum.charitySummary}
          cardPledged={pledge}
          chooseDonation={this.handleSingleDonate}
          donationAmount={this.props.location.state.totalcost}
          charityImage={image}
          backgroundSizeImg={size}
          cardAltGoal={datum.charityAltGoal}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <div>{gridItems}</div>
    )
  }

  render() {
    if (this.props.location.state === null || this.props.gotOrderByRedem.length === 0) {
      return (
        <Redirect to={{ pathname: `/`}} />
      );
    }

    return (
      <Wrapper>
        <div>
            <div>
              <Loadable
                active={this.props.choosingDonation && this.state.splitDonate}
                spinner={true}
                spinnerSize={'100px'}
                text={"Processing donation choice!.."}>
                <SupportACauseSection
                  supportOpen={this.state.supportOpen}
                  handleClose={this.closeSupportModal}
                  noAllocationleft={this.state.noAllocationleft}
                  splitDonation={this.openSplitDonation}
                  totalOrder={this.props.location.state.totalcost}
                  handleDonate={this.handleSplitDonate}
                  remainderAmount={this.state.remainding}
                  orgs={[testData[0], testData[2]]}
                  overlayColor={'#CFDBD2'} />
              </Loadable>
              <Loadable
                active={this.props.choosingDonation}
                spinner={true}
                spinnerSize={'100px'}
                text={"Processing donation choice!.."}>
                  {this.mapSections(testData)}
              </Loadable>
            </div>
          <LuxarityIsMoreSection />
          <DonationCompleteModal
            transaction={this.state.transaction}
            open={this.state.donateComplete}
            handleClose={this.closeDonateComplete} />
          <MessageModal
            open={this.state.modalMessage}
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
