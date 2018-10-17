//import react
import React from 'react';
//components
import { Row } from 'react-grid-system';
import LogoRow from './LogoRow';
import { Link } from 'react-router-dom'; //v4


export default class Header extends React.Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      value: 1,
    }

    //bind functions
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <div style={{paddingLeft: '10%', paddingRight: '10%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, position: 'relative'}}>
        <Row style={{alignItems: 'center', justifyContent: 'space-between', paddingTop: 2}}>
            <Row style={{paddingLeft: 5}}>
              <LogoRow SiteTitle={'Impactfolio'} />
              <div style={{paddingLeft: 40, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/' }} style={{textDecoration: 'none', color: 'black', float:'left'}}>HOME</Link>
              </div>
              <div style={{paddingLeft: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/about' }} style={{textDecoration: 'none', color: 'black', float:'left'}}>ABOUT</Link>
              </div>
              <div style={{paddingLeft: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/raw' }} style={{textDecoration: 'none', color: 'black', float:'left'}}>RAW</Link>
              </div>
              <div style={{paddingLeft: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/popup' }} style={{textDecoration: 'none', color: 'black', float:'left'}}>POPUP</Link>
              </div>
            </Row>
            <Row style={{paddingLeft: 5}}>
              <div style={{paddingRight: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/faq' }} style={{textDecoration: 'none', color: 'black'}}>DONATE</Link>
              </div>
              <div style={{paddingRight: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center', borderLeft: 'thin solid grey', height: 15, width: 0.3}}>
              </div>
              <div style={{paddingRight: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: '/about' }} style={{textDecoration: 'none', color: 'black'}}>SUPPORT</Link>
              </div>
            </Row>
        </Row>
      </div>
    );
  }
}
