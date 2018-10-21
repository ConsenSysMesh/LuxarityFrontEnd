import React, { Component } from 'react'
//css components
import { Col, Row } from 'react-grid-system';
//components
import Wrapper from '../../components/wrapper/Wrapper'
import EnterPinSection from '../../components/sections/EnterPinSection'
import AllFashionSection from '../../components/sections/AllFashionSection'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'

class Redeem extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', paddingTop: '3%', paddingBottom: '3%', paddingLeft: 20, paddingRight: 5, margin: 0}}>
            <EnterPinSection />
          </Row>
          <AllFashionSection />
          <LuxarityIsMoreSection />
        </div>
      </Wrapper>
    )
  }
}

export default Redeem
