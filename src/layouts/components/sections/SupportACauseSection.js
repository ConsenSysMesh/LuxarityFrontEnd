import React, { Component } from 'react'
//componets
import Grid from '@material-ui/core/Grid'
import SupportModal from '../projectcard/SupportModal'
//img
import AllImg from '../../img/tripleFashion.png'

class SupportACauseSection extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.formatNum = this.formatNum.bind(this)
    this.splitTotal = this.splitTotal.bind(this)
    this.onDonate = this.onDonate.bind(this)
    this.formatExpense = this.formatExpense.bind(this)
  }

  splitTotal(x,y) {
    let sum = x - y
    let donateAmount = sum/3
    let final = Math.max( Math.round(donateAmount * 10) / 10, 2.8 ).toFixed(2)
    return final
  }

  formatExpense(x) {
    if (x !== null && x !== 0) {
      //console.log(x)
      let hkd = x*0.30
      let final = Math.round(hkd);
      let string = final + ""
      let firstNum =  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return "- HK$" + firstNum
    }
    return "$0"
  }

  formatNum(x) {
    if (x !== null && x !== 0) {
      //console.log(x)
      let hkd = x
      let final = Math.round(hkd);
      let string = final + ""
      let firstNum =  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return "HK$" + firstNum
    }
    return "$0"
  }

  getAllocationStatus(allocationStatus) {
    if (allocationStatus) {
      return (
        <div>
          <p className="dashboard-text" style={{color: 'white', fontFamily: 'Boysen Regular'}}><strong>The following order&#39;s proceeds have already been allocated to a good cause! If you&#39;d like to contribute further, <u><a href="https://luxarity-popup-2016.myshopify.com/" style={{textDecoration: 'none', color: 'white'}} target="_blank">please donate here</a></u>.</strong></p>
        </div>
      )
    }

    return (
      <span></span>
    )
  }

  onDonate() {
    this.props.handleDonate(this.props.remainderAmount)
  }

  render() {
    return(
      <div>
        <div className="dashboard-main">
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} className="dashboard-main-info">
              <div className="dashboard-main-info-l">
                <p className="dashboard-title" style={{fontFamily: 'Boysen Regular'}}>Support a cause</p>
                <p className="dashboard-text" style={{fontFamily: 'Boysen Regular'}}>To support the development of sustainable education and innovation in the lifestyle industry, LUXARITY is raising a total of $350,000 HKD to develop an open-sourced online course with SCAD HK ($150,000 HKD) & to support two designers from PARSONS SCHOOL OF DESIGN ($200,000 HKD) who are focused on sustainability & innovation.</p>
                {this.getAllocationStatus(this.props.noAllocationleft)}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="dashboard-main-info">
              <div className="dashboard-main-info-l">
                <div className="cause-donation">
                  <p>Purchase total: <span className="p-tot-amt">{this.formatNum(this.props.totalOrder)}</span> </p>
                  <div>
                    <div class="tooltip">?
                      <span class="tooltiptext">30% of funds raised will go towards LUXARITY&#39;s operational costs to continue making an impact.</span>
                    </div>
                    <p style={{display: 'inline', paddingLeft: '5px'}}>Operational Cost: <span className="lux-fee" style={{color: 'white'}}>{this.formatExpense(this.props.remainderAmount)}</span> </p>
                  </div>
                  <hr/>
                  <p className="d-tot">Amount to Cause: <span className="d-tot-amt">{this.formatNum(this.props.remainderAmount - this.props.remainderAmount*0.30)}</span> </p>
                </div>

                <button className="p-btn-clear" disabled={this.props.noAllocationleft} onClick={this.props.splitDonation}>Split my donation evenly</button>
              </div>
            </Grid>
          </Grid>
        </div>
        <SupportModal
          type={'split'}
          open={this.props.supportOpen}
          onDonate={this.onDonate}
          handleClose={this.props.handleClose}
          overlayColor={'#CFDBD2'}
          orgs={this.props.orgs}
          donationAmount={this.props.remainderAmount}
          donationImage={AllImg} />
       </div>
    )
  }
}

export default SupportACauseSection
