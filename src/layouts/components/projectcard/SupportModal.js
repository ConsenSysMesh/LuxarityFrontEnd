import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'


class SupportModal extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.formatNum = this.formatNum.bind(this)
    this.getColor = this.getColor.bind(this)
    this.getType = this.getType.bind(this)
  }

  formatNum(x) {
    if (x !== null && x !== 0) {
      let string = x + ""
      let firstNum =  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return "$" + firstNum
    }
    return "$0"
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

  getType(type) {
    if (type.toLowerCase() === 'split') {
      return (
        <div>
          <Row style={{padding: 0, margin: 0}}>
            <div className="card-content" style={{width: '100%', margin: 0}}>
              <div style={{paddingTop: 4, paddingBottom: 4}}>
                <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>
              </div>
              <div style={{paddingTop: 4, paddingBottom: 4}}>
                <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>
              </div>
              <div style={{paddingTop: 4, paddingBottom: 4}}>
                <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>
              </div>
            </div>
          </Row>
        </div>
      )
    } else {
      return (
        <div>
          <Row style={{background: 'white', height: 180, padding: 0, margin: 0}}> <span></span></Row>
          <Row style={{padding: 0, margin: 0}}>
            <div className="card-content" style={{width: '100%', margin: 0}}>
              <p className="card-sub-title" style={{color: this.getColor(this.props.cardCategory)}}>{this.props.cardCategory}</p>
              <p className="card-title">{this.props.cardOrgName}</p>
            </div>
          </Row>
        </div>
      )
    }
  }

  render() {
    return(

      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        overlayStyle={{backgroundColor: this.props.overlayColor}} >
        <DialogContent style={{padding: 0, maxHeight: 800}}>
          <Row style={{minHeight: 400, backgroundColor: '#F1F2F3'}}>
            <Col md={5} style={{width: '100%', overflow: 'hidden', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}} >
              <img alt="LUXARITY" className="boxed-image" style={{width: '100%', height: '100%'}} src={this.props.donationImage} />
            </Col>
            <Col md={7} className="box" style={{margin: 0, padding: 0}}>
              {this.getType(this.props.type)}
              <div style={{backgroundColor: '#cfdbd2', justifyContent: 'center', alignItems: 'center', height: 200, width: '100%'}}>
                <div className="card-subsection">
                  <div className="card-subsection-title"><strong>You&#39;re donating {this.formatNum(this.props.donationAmount)}</strong></div>
                  <div className="card-subsection-text" style={{fontSize: 14, color: '#595A55'}}>If you are sure you&#39;d like to donate {this.formatNum(this.props.donationAmount)}, please press the donate button.</div>
                </div>
                <div className="card-subsection" >
                  <button className="p-btn-dark-small" style={{display: "inline-block", marginRight: 20}} onClick={this.props.onDonate}>Submit Donation</button>
                  <button className="p-btn-light-small" style={{display: "inline-block"}} onClick={this.props.handleClose}>Cancel</button>
                </div>
              </div>
            </Col>
          </Row>
        </DialogContent>
      </Dialog>
    )
  }
}

export default SupportModal
