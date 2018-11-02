import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system';
//components

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
      <div>
        <Row style={{width: '55%', minHeight: 400, backgroundColor: '#F1F2F3'}}>
          <Col md={5} style={{width: '100%', overflow: 'hidden', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <img alt="LUXARITY" className="boxed-image" style={{width: '100%', height: '100%'}} src='{this.props.charityImage}' />
          </Col>
          <Col md={7} className="box">
            <Row style={{background: 'white', height: 180, padding: 0}}></Row>
            <Row style={{padding: 0}}>
              <div className="card-content" style={{width: '100%', margin: 0}}>
                <p className="card-sub-title1" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>

                <div className="progress-bar" style={{width: '102%'}}>
                  <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal), backgroundColor: this.getColor(this.props.cardCategory)}}></div>
                </div>

                <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
                <p className="pledge-sub">pledged of {this.formatNum(this.props.cardGoal)} goal</p>
              </div>
            </Row>
            <Row style={{backgroundColor: '#cfdbd2', justifyContent: 'space-around', alignItems: 'center', height: 100}}>
              <button className="p-btn-dark-small" style={{display: "inline-block"}} onClick={this.handleOpen}>Submit Donation</button>
              <button className="p-btn-light-small" style={{display: "inline-block"}} onClick={this.handleDonate}>Project Details</button>
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}

export default ProjectCardSimple

/*

*/
