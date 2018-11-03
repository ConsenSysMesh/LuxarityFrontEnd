import React, { Component } from 'react'
import { Col } from 'react-grid-system';

class ProjectSkinnyCard extends Component {
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

  render() {
    return(
      <div sm={12} md={5.5} lg={3.5} style={{width: 295, padding: '0 30px'}}>
        <div>
          <div style={{backgroundColor: 'f1f2f3'}}></div>
          <img alt="LUXARITY" style={{width: 295, height: 440}} src={this.props.charityImage} />
        </div>
        <div style={{width: 295}}>
          <div className="card-content-slim" style={{width: '100%', margin: 0}}>
            <p className="card-sub-title1" style={{paddingLeft: '0', color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
            <p className="card-title-slim" style={{paddingLeft: '0', minHeight: '80px', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>{this.props.cardOrgName}</p>

            <div className="support-progress-bar" style={{marginLeft: '0'}}>
              <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal), backgroundColor: this.getColor(this.props.cardCategory)}}></div>
            </div>

            <div style={{paddingLeft: '0'}}>
              <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
              <div className="pledge-sub" >pledged of {this.formatNum(this.props.cardAltGoal)} goal</div>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', padding: '25px'}}>
            <button className="p-btn-light-small" style={{display: "inline-block", border: 'solid rgb(210,210,210)'}}><a href={this.props.charityURL} style={{textDecoration: 'none', color: 'black'}} target="_blank">Project details </a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectSkinnyCard

/*

*/
