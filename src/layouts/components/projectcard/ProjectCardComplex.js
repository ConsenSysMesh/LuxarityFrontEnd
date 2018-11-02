import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
//components
import SupportModal from './SupportModal'
//css components
import Loadable from 'react-loading-overlay'


class ProjectCardComplex extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      supportOpen: false,
    }

    //bind functions
    this.formatNum = this.formatNum.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.getProgress = this.getProgress.bind(this)
    this.getColor = this.getColor.bind(this)
    this.chooseSides = this.chooseSides.bind(this)
    this.closeDonateComplete = this.closeDonateComplete.bind(this)
    this.handleDonate = this.handleDonate.bind(this)
    this.getButtons = this.getButtons.bind(this)
  }

  async handleDonate() {
    //make choose donation order
    this.setState({ supportOpen: false })
    await this.props.chooseDonation(this.props.order)
  }

  handleClose() {
    this.setState({ supportOpen: false })
  }

  handleOpen() {
    this.setState({ supportOpen: true })
  }

  formatNum(x) {
    if (x !== null && x !== 0) {
      let hkd = x
      let final = Math.round(hkd);
      let string = final + ""
      let firstNum =  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return "HK$" + firstNum
    }
    return "$0"
  }

  getProgress(x,y) {
    let progress = (x/y)*100
    if (progress > 100) {
      progress = 100
    }
    let stringWidth = progress.toString()
    return stringWidth + "%"
  }

  getColor(category) {
    if (category.toLowerCase() === "responsibility") {
      return 'grey'
    } else if (category.toLowerCase() === "awareness") {
      return 'gold'
    } else if (category.toLowerCase() === "wonder") {
      return 'turquoise'
    }
  }

  closeDonateComplete() {
    this.setState({ donateComplete: false })
  }

  getButtons(index, direction) {
    if (index === 1) {
      if (direction === 'right') {
        return (
          <div style={{float: 'right'}}>
            <button className="p-btn-light" style={{marginRight: 0}}> <a href={this.props.charityURL} style={{textDecoration: 'none', color: 'black'}} target="_blank">Project details </a></button>
          </div>
        )
      } else {
        return(
          <div>
            <button className="p-btn-light" style={{marginRight: 0}}> <a href={this.props.charityURL} style={{textDecoration: 'none', color: 'black'}} target="_blank">Project details </a></button>
          </div>
        )
      }
    } else {
      if (direction === 'right') {
        return (
          <div style={{float: 'right'}}>
            <button className="p-btn-dark" disabled={this.props.noAllocationleft} onClick={this.handleOpen}> Support this project </button>
            <button className="p-btn-light" style={{marginRight: 0}}> <a href={this.props.charityURL} style={{textDecoration: 'none', color: 'black'}} target="_blank">Project details </a></button>
          </div>
        )
      } else {
        return (
          <div>
            <button className="p-btn-dark" disabled={this.props.noAllocationleft} onClick={this.handleOpen}> Support this project </button>
            <button className="p-btn-light" style={{marginRight: 0}}> <a href={this.props.charityURL} style={{textDecoration: 'none', color: 'black'}} target="_blank">Project details </a></button>
          </div>
        )
      }
    }

  }

  chooseSides(side) {
    if (side.toLowerCase() === 'right') {
      return (
        <div>
          <div className="p-card1" style={{backgroundImage: "url(" + this.props.charityImage + ")", backgroundRepeat: 'no-repeat', backgroundSize: this.props.backgroundSizeImg, backgroundPosition: 'right'}}>
            <Grid container style={{padding: 0}}>
              <Grid item xs={12} sm={1}></Grid>
              <Grid item xs={12} sm={7} style={{paddingBottom: 30}}>
                <div className="card-content" >
                  <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                  <p className="card-title">{this.props.cardOrgName}</p>

                  <p className="card-text">
                    {this.props.cardSummary}
                  </p>

                  <div className="progress-bar" style={{width: '102%'}}>
                    <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal), backgroundColor: this.getColor(this.props.cardCategory)}}></div>
                  </div>

                  <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
                  <div className="pledge-sub" >pledged of {this.formatNum(this.props.cardAltGoal)} goal</div>
                </div>

                {this.getButtons(this.props.index)}
              </Grid>
            </Grid>
          </div>
          <SupportModal
            type={'single'}
            open={this.state.supportOpen}
            onDonate={this.handleDonate}
            handleClose={this.handleClose}
            overlayColor={'#CFDBD2'}
            donationAmount={this.props.donationAmount}
            donationImage={this.props.charityImage}
            cardCategory={this.props.cardCategory}
            cardOrgName={this.props.cardOrgName}
            cardPledged={this.props.cardPledged}
            cardGoal={this.props.cardGoal} />
        </div>
      )
    } else if (side.toLowerCase() === 'left') {
      return (
        <div>
          <div className="p-card2" style={{backgroundImage: "url(" + this.props.charityImage + ")", backgroundRepeat: 'no-repeat', backgroundSize: this.props.backgroundSizeImg, backgroundPosition: 'left'}}>
            <Grid container>
              <Grid item xs={12} sm={5}></Grid>
              <Grid item xs={12} sm={6} style={{paddingBottom: 30}}>
                <div className="card-content">
                  <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                  <p className="card-title">{this.props.cardOrgName}</p>

                  <p className="card-text">
                    {this.props.cardSummary}
                  </p>

                  <div className="progress-bar" style={{width: '102%'}}>
                    <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal), backgroundColor: this.getColor(this.props.cardCategory)}}></div>
                  </div>

                  <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
                  <div className="pledge-sub" >pledged of {this.formatNum(this.props.cardAltGoal)} goal</div>
                </div>

                {this.getButtons(this.props.index, 'right')}

              </Grid>
            </Grid>
          </div>
          <Loadable
            active={this.props.choosingDonationNow}
            spinner={true}
            spinnerSize={'100px'}
            text={"Processing donation choice!.."}>
            <SupportModal
              type={'single'}
              open={this.state.supportOpen}
              onDonate={this.handleDonate}
              handleClose={this.handleClose}
              overlayColor={'#E5D9CF'}
              donationAmount={this.props.donationAmount}
              donationImage={this.props.charityImage}
              cardCategory={this.props.cardCategory}
              cardOrgName={this.props.cardOrgName}
              cardPledged={this.props.cardPledged}
              cardGoal={this.props.cardGoal} />
          </Loadable>
        </div>
      )
    }
  }

  render() {
    return(
      <section>
        {this.chooseSides(this.props.cardOrientation)}
      </section>
    )
  }
}

export default ProjectCardComplex
