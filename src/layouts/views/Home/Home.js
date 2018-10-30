import React, { Component } from 'react'
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import { Link } from 'react-router-dom' //v4
import Grid from '@material-ui/core/Grid'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <div className="landing-splash">
            <p className="splash-heading">Conscious living for all</p>
            <button className="p-btn-dark">
              <Link to={{pathname: '/redeem' }} style={{ textDecoration: 'none', color: 'white'}}>Redeem Popup Order</Link>
            </button>
          </div>

          <div className="landing-content">
            <Grid container>
              <Grid item xs={12} sm={6}>
                <img src={require('../../img/foo1.png')} alt="Luxarity Fashion"/>
              </Grid>
              <Grid item xs={12} sm={6} className="landing-content-info">
                <h3 className="splash-heading">The Impact of Popups</h3>
                <a href="http://luxarity.com" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'white'}}>
                  <button className="p-btn-dark">Learn More</button>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Home
