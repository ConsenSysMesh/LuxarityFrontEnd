import React, { Component } from 'react'
import logo from '../../img/logo.png'
import Grid from '@material-ui/core/Grid'

class Home extends Component {
  render() {
    return (
      <main>
        <div className="landing-splash">
          <h1 className="splash-heading">Pop up hero splash</h1>
          <button className="p-btn-dark">Enter pin</button>
        </div>

        <div className="landing-content">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img src={require('../../img/foo1.png')} />
            </Grid>
            <Grid item xs={12} sm={6} className="landing-content-info">
              <h3 className="splash-heading">Pop up hero splash</h3>
              <button className="p-btn-dark">Enter pin</button>
            </Grid>
          </Grid>
        </div>
      </main>
    )
  }
}

export default Home
