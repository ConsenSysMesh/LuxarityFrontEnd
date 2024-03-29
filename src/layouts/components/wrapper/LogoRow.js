//import react
import React from 'react';
//logo
import logoSVG from '../../img/luxlogo.svg';

export default class LogoRow extends React.Component {

  render() {
    return (
      <div style={{display:'inline-block', alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
        <a href='/' style={{textDecoration: 'none', color: '#50555A'}}>
          <img alt="LUXARITY" role="presentation" src={logoSVG} style={{display: 'inline-block', width: 150, height: 25, justifyContent: 'center', alignItems: 'center'}} />
        </a>
      </div>
    );
  }
}
