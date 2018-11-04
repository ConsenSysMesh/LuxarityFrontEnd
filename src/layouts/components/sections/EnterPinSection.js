import React, { Component } from 'react'
//componets
import { Row, Col } from 'react-grid-system'
//import { Link } from 'react-router-dom'

class EnterPinSection extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      pinValue: '',
    }

    //bind functions
    this.updatePin = this.updatePin.bind(this)
    this.formatNum = this.formatNum.bind(this)
  }

  updatePin(event) {
    this.setState({ pinValue: event.target.value })
    this.props.setPinValue(event.target.value)
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

  render() {
    return(
      <Row style={{backgroundColor: '#F1F2F3', justifyContent: 'center', margin: 0, width: '100%', padding: 0}}>
        <Col md={6} style={{backgroundColor: '#595956', margin: 0}}>
          <Row style={{textAlign: 'left', letterSpacing: 4, fontSize: 42, paddingRight: '15%', paddingLeft: '15%', paddingTop: '15%', paddingBottom: '8%', color: '#BEC0BE', lineHeight: 1.7}}>
            <div style={{textTransform: 'uppercase', color: 'white'}}>THE FUTURE OF</div>
            <div style={{textTransform: 'uppercase', color: 'white'}}>GIVING IS HERE</div>
            <div style={{color: '#BEC0BE', fontSize: 14, letterSpacing: 1, lineHeight: 1.7, paddingTop: 20, paddingBottom: 10}}>Decide which cause to support and track where your money goes, when it is spent, and how it is spent.</div>
            <a href="http://luxarity.com" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: '#585A56'}}>
              <button className="p-btn-light" style={{color: '#585A56', letterSpacing: 1, paddingLeft: '10%', paddingRight: '10%'}}> Learn More </button>
            </a>
          </Row>
          <Row style={{backgroundColor: '#333332', paddingBottom: 10}}>
            <Col style={{textAlign: 'left', fontSize: 30, minHeight:150, width: '100%', paddingRight: '15%', paddingLeft: '15%', paddingTop: '5%', paddingBottom: 10}}>
              <div style={{textTransform: 'uppercase', color: 'white'}}>{this.formatNum(this.props.totalRaised)}</div>
              <div style={{color: '#BEC0BE', fontSize: 14, letterSpacing: 1, lineHeight: 1.7, paddingTop: 10, paddingBottom: 20, textTransform: 'uppercase'}}>Total Sales Towards our Fundraising Goal</div>
            </Col>
          </Row>
        </Col>
        <Col md={6} style={{margin: 0}}>
          <Col style={{textAlign: 'left', alignItems: 'center', justifyContent: 'center', padding: '15%', color: 'black', lineHeight: 1.7}}>
            <div style={{textTransform: 'uppercase', fontSize: 40}}><strong>ENTER YOUR PIN</strong></div>
            <div style={{textTransform: 'uppercase', fontSize: 40}}><strong>NUMBER</strong></div>
            <div style={{color: '#BEC0BE', fontSize: 14, letterSpacing: 1, lineHeight: 1.7, paddingTop: 20, paddingBottom: 20}}>Please enter your pin to choose where the proceeds of your order goes toward. Your pin is located in your email receipt sent from LUXARITY.</div>
            <div className="inputbox">
              <input type="text" placeholder="0 • 0 • 0 • 0 • 0" name="password" style={{color: '#B2B2B2', width: '80%'}} value={this.state.pinValue} onChange={this.updatePin}/>
              <button onClick={this.props.enterPin}>
                <div>&rarr;</div>
              </button>
            </div>
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
              <button className="p-btn-dark" style={{color: 'white', letterSpacing: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}><a style={{textDecoration: 'none', color: 'white'}} href="https://luxarity-popup-2016.myshopify.com/" target="_blank">Make Additional Donation</a></button>
            </div>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default EnterPinSection

/*
<button onClick={this.props.enterPin}>
  <Link to={{pathname: '/support' }} style={{ textDecoration: 'none', color: 'white'}}>
    <div style={{paddingBottom: 10}}>&rarr;</div>
  </Link>
</button>
*/
