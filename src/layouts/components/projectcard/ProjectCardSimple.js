import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Row, Col } from 'react-grid-system';


class ProjectCardSimple extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.formatNum = this.formatNum.bind(this)
  }

  formatNum(x) {
    let firstNum =  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return "$" + firstNum
  }

  getProgress(x,y) {
    let progress = (x/y)*100
    let stringWidth = progress.toString()
    return stringWidth + "%"
  }

  render() {
    return(
      <Row style={{width: '55%', minHeight: 400, backgroundColor: '#F1F2F3'}}>
        <Col md={5} style={{width: '100%', overflow: 'hidden', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <img className="boxed-image" style={{width: '100%', height: '100%'}} src={this.props.charityImage} />
        </Col>
        <Col md={7} className="box">
          <Row style={{background: 'white', height: 180, padding: 0}}></Row>
          <Row style={{padding: 0}}>
            <div className="card-content" style={{width: '100%', margin: 0}}>
              <p className="card-sub-title">{this.props.cardCategory}</p>
              <p className="card-title">{this.props.cardOrgName}</p>

              <div className="progress-bar-small">
                <div className="progress-bar-meter" style={{width: this.getProgress(this.props.cardPledged,this.props.cardGoal)}}></div>
              </div>

              <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
              <p className="pledge-sub">pledged of {this.formatNum(this.props.cardGoal)} goal</p>
            </div>
          </Row>
          <Row style={{backgroundColor: '#cfdbd2', justifyContent: 'space-around', alignItems: 'center', height: 100}}>
            <button className="p-btn-dark-small" style={{display: "inline-block"}}>Submit Donation</button>
            <button className="p-btn-light-small" style={{display: "inline-block"}}>Project Details</button>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ProjectCardSimple
