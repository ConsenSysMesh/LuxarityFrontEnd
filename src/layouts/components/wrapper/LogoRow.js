//import react
import React from 'react';
//css
import { Row } from 'react-grid-system';
import { Link } from 'react-router-dom'; //v4

export default class LogoRow extends React.Component {

  render() {
    return (
      <div style={{display:'inline-block'}}>
        <Row>
          <Link to={{pathname: '/' }} style={{textDecoration: 'none', color: '#50555A'}}>
            <img role="presentation" src="http://www.luxarity.com/wp-content/uploads/2017/10/lux001_footer_logow_200-3.png" style={{display: 'inline-block', width: '13%'}} />
          </Link>
        </Row>
      </div>
    );
  }
}
