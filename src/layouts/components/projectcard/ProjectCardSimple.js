import React, { Component } from 'react'
import { Col } from 'react-grid-system';

class ProjectCardSimple extends Component {
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
      let string = x + ""
      let firstNum =  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return "$" + firstNum
    }
    return "$0"
  }

  getProgress(x,y) {
    let progress = (x/y)*100
    let stringWidth = progress.toString()
    return stringWidth + "%"
  }

  getColor(category) {
    if (category.toLowerCase() === "responsible") {
      return '#1DB42E'
    } else if (category.toLowerCase() === "aware") {
      return '#FD3F11'
    } else if (category.toLowerCase() === "wonder") {
      return '#25C7AA'
    }
  }

  render() {
    return(
      <Col sm={12} md={4}>

        <div style={{margin: '0 25px 25px 50px'}}>
          <img alt="LUXARITY" style={{width: '100%', height: '100%'}} src={require('../../img/Tan.png')} />
          <div className="card-content" style={{width: '100%', margin: 0}}>
            <p className="card-sub-title" style={{paddingLeft: '25px', color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
            <p className="card-title" style={{paddingLeft: '25px'}}>{this.props.cardOrgName}</p>

            <div className="support-progress-bar" style={{marginLeft: '25px'}}>
              <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal)}}></div>
            </div>

            <div style={{paddingLeft: '25px'}}>
              <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
              <p className="pledge-sub">pledged of {this.formatNum(this.props.cardGoal)} goal</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', margin: '25px'}}>
            <button className="p-btn-dark-small" style={{display: "inline-block"}} onClick={this.handleDonate}>Project Details</button>
          </div>
        </div>

      </Col>
    )
  }
}

export default ProjectCardSimple

/*

*/
