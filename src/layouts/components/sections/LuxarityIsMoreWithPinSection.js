import React, { Component } from 'react'
//componets
import { Row, Col } from 'react-grid-system';

class LuxarityIsMoreWithPinSection extends Component {

  render() {
    return(
      <section>
        <Row style={{backgroundColor: 'white', padding: '3%', minHeight: 300, alignItems: 'center', justifyContent: 'center'}}>
          <Col style={{backgroundColor: '#585A56', flex: 0.5, padding: '3%'}}>
          </Col>
          <Col style={{backgroundColor: '#F1F2F3', flex: 0.5, padding: '3%'}}>
          </Col>
        </Row>
      </section>
    )
  }
}

export default LuxarityIsMoreWithPinSection
