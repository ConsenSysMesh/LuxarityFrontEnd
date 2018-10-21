import React, { Component } from 'react'
//componets
import { Row } from 'react-grid-system'
import fashion from '../../img/allFashion.png'

class AllFashionSection extends Component {

  render() {
    return(
      <Row style={{backgroundColor: '#F1F2F3', alignItems: 'center', justifyContent: 'center', margin: 0, minHeight: 400, width: '100%', overflow: 'hidden', padding: 0}}>
          <img alt="LUXARITY" className="boxed-image" style={{width: '100%', height: '100%'}} src={fashion} />
      </Row>
    )
  }
}

export default AllFashionSection
