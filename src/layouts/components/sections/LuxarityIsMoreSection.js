import React, { Component } from 'react'
//componets
import { Row, Col } from 'react-grid-system';

class LuxarityIsMoreSection extends Component {

  render() {
    return(
      <Row style={{backgroundColor: 'white', minHeight: 300, alignItems: 'center', justifyContent: 'center', margin: '50px'}}>
        <div style={{backgroundColor: '#585A56', width: '100%', minHeight: 280, padding: '5%'}}>
          <Row style={{alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 30}}>
            <Col style={{textAlign: 'center', letterSpacing: 4}}>
              <div>TO INSPIRE CONSCIOUS</div>
              <div>LIVING FOR ALL</div>
            </Col>
          </Row>
          <Row style={{alignItems: 'center', justifyContent: 'center', paddingTop: '4%', flexDirection: 'space around'}}>
            <Col style={{alignItems: 'center', justifyContent:'center'}}>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{color: 'white', fontSize: 25, letterSpacing: 3, textAlign: 'center', padding: 5}}>GIVING</div>
              </Row>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{textAlign: 'center', color: '#D1D3D1', fontSize: 14, width: '60%', lineHeight: 1.6}}>Our network of community members donate their pre-loved luxury goods & show their support</div>
              </Row>
            </Col>
            <Col style={{alignItems: 'center', justifyContent:'center'}}>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{color: 'white', fontSize: 25, letterSpacing: 3, textAlign: 'center', padding: 5}}>DISCOVERING</div>
              </Row>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{textAlign: 'center', color: '#D1D3D1', fontSize: 14, width: '60%', lineHeight: 1.6}}>Pop-up events of curated pre-loved luxury goods and a transparent donations process.</div>
              </Row>
            </Col>
            <Col style={{alignItems: 'center', justifyContent:'center'}}>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{color: 'white', fontSize: 25, letterSpacing: 3, textAlign: 'center', padding: 5}}>RECEIVING</div>
              </Row>
              <Row style={{alignItems: 'center', justifyContent:'center'}}>
                <div style={{textAlign: 'center', color: '#D1D3D1', fontSize: 14, width: '60%', lineHeight: 1.6}}>All benefits raised support projects and educational grants focusing on the UN SDGs.</div>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>
    )
  }
}

export default LuxarityIsMoreSection
