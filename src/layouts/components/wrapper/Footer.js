//import react
import React from 'react';
//components
import { Row, Col } from 'react-grid-system';

export default class Footer extends React.Component {

  render() {

    return (
      <Col>
        <Row style={{backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, minHeight: 300, alignItems: 'center', justifyContent: 'center'}}>
          <div style={{backgroundColor: '#585A56', width: '95%', minHeight: 280}}>
          </div>
        </Row>
        <Row style={{backgroundColor: 'white', minHeight: 60, borderTop: '1px solid #F1F2F3'}}>
        </Row>
        <Row style={{backgroundColor: '#F1F2F3', minHeight: 300, flexDirection: 'space-around'}}>
        </Row>
      </Col>
    );
  }
}
