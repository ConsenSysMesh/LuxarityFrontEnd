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
  }

  updatePin(event) {
    this.setState({ pinValue: event.target.value })
    this.props.setPinValue(event.target.value)
  }

  render() {
    return(
      <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', margin: 0, minHeight: 400, width: '97%', padding: 0}}>
        <Col md={6} style={{backgroundColor: '#585A56', minHeight: 400}}>
          <Col style={{textAlign: 'left', letterSpacing: 4, fontSize: 26, alignItems: 'center', justifyContent: 'center', padding: '15%', color: '#BEC0BE', lineHeight: 1.7}}>
            <div style={{textTransform: 'uppercase'}}>LUXARITY IS MORE</div>
            <div style={{textTransform: 'uppercase'}}>THAN A STORE</div>
            <div style={{color: '#BEC0BE', fontSize: 14, letterSpacing: 1, lineHeight: 1.7, paddingTop: 20, paddingBottom: 20}}>Choose to donate to one or both of these causes. We will keep in touch with you with updates on their progress over the next few months.</div>
            <button className="p-btn-light-medium" style={{color: '#585A56', letterSpacing: 1, paddingLeft: '10%', paddingRight: '10%'}}> Learn More </button>
          </Col>
        </Col>
        <Col md={6} style={{minHeight: 400}}>
          <Col style={{textAlign: 'left', alignItems: 'center', justifyContent: 'center', padding: '15%', color: 'black', lineHeight: 1.7}}>
            <div style={{fontSize: 30}}>Redeem your donation</div>
            <div style={{color: '#BEC0BE', fontSize: 14, letterSpacing: 1, lineHeight: 1.7, paddingTop: 20, paddingBottom: 20}}>Want to choose which cause your order proceeds go towards? Please enter your pin found on your sale receipt from the Luxarity Pop-up shop.</div>
            <div className="inputbox">
              <input type="text" placeholder="0 • 0 • 0 • 0 • 0" name="password" style={{color: '#B2B2B2', width: '80%'}} value={this.state.pinValue} onChange={this.updatePin}/>
              <button onClick={this.props.enterPin}>
                <div style={{paddingBottom: 10}}>&rarr;</div>
              </button>
            </div>
            <div style={{justifyContent: 'space-around', alignItems: 'center'}}>
              <button className="p-btn-dark-medium" style={{color: 'white', letterSpacing: 1, paddingLeft: '5%', paddingRight: '5%', backgroundColor: 'black'}}> I Don&#39;t have a pin </button>
              <button className="p-btn-dark-medium" style={{color: '#585A56', letterSpacing: 1, paddingLeft: '5%', paddingRight: '5%'}}>Lost Receipt? </button>
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
