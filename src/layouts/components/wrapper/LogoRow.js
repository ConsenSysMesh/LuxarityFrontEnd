//import react
import React from 'react';
//css
import { Link } from 'react-router-dom'; //v4
//logo
import logoSVG from '../../img/luxlogo.svg';

export default class LogoRow extends React.Component {

  render() {
    return (
      <div style={{display:'inline-block', alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
        <Link to={{pathname: '/' }} style={{textDecoration: 'none', color: '#50555A'}}>
          <img role="presentation" src={logoSVG} style={{display: 'inline-block', width: 150, height: 25, justifyContent: 'center', alignItems: 'center'}} />
        </Link>
      </div>
    );
  }
}
