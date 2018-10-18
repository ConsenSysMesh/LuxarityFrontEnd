//import react
import React from 'react';
//components
import { Row, Col } from 'react-grid-system';

export default class Footer extends React.Component {

  render() {

    return (
      <Col>
        <Row style={{backgroundColor: 'white', minHeight: 60, borderTop: '1px solid #F1F2F3', alignItems: 'center', justifyContent: 'center', paddingLeft: '15%', paddingRight: '15%'}}>
          <div style={{fontSize: 20, color: '#111112', textAlign: 'center', display: 'inline-block', paddingRight: 20}}>Stay up to date with everything luxarity</div>
          <div style={{fontSize: 20, color: '#111112', textAlign: 'center', display: 'inline-block', paddingLeft: 20}}>BOX HERE</div>
        </Row>
        <Row style={{backgroundColor: '#F1F2F3', minHeight: 300, flexDirection: 'space-around'}}>
        </Row>
      </Col>
    );
  }
}
