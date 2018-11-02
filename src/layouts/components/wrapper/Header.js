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
      <div style={{paddingLeft: '5%', paddingRight: '5%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingTop: 15, paddingBottom: 15, position: 'relative'}}>
        <Row style={{alignItems: 'center', justifyContent: 'space-between', paddingTop: 2}}>
            <Row style={{paddingLeft: 5, justifyContent: 'center', alignItems: 'center'}}>
              <LogoRow SiteTitle={'Luxarity Popup'} />
              <div style={{paddingLeft: 40, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <a href='/' style={{textDecoration: 'none', color: '#7F8081', float:'left'}}>HOME</a>
              </div>
              <div style={{paddingLeft: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={{pathname: 'https://luxarity.com/about' }} style={{textDecoration: 'none', color: '#7F8081', float:'left'}}>ABOUT</Link>
              </div>
              <div style={{paddingLeft: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center',textDecoration: 'none', color: '#7F8081', float:'left'}}><a href="http://luxarity.com/pop-up-events/" style={{textDecoration: 'none', color: '#7F8081'}}>POPUP</a>
              </div>
            </Row>
            <Row style={{paddingLeft: 5}}>
              <div style={{paddingRight: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}><a href="https://luxarity-popup-2016.myshopify.com/" style={{textDecoration: 'none', color: 'white', backgroundColor: 'rgb(93,201,168)', padding: '10px 20px'}} target="_blank">DONATE</a>
              </div>

              <div style={{paddingRight: 20, fontSize: 12, display: 'inline-block', alignItems: 'center', justifyContent: 'center', color: '#7F8081'}}><a href="mailto:info@luxarity.com" data-rel="external" target="_blank" style={{textDecoration: 'none', color: '#7F8081'}}>SUPPORT</a>
              </div>
            </Row>
        </Row>
      </div>
    );
  }
}
