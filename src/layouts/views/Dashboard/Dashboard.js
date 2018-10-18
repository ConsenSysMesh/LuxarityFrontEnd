import React, { Component } from 'react'
import logo from '../../img/logo.png'
import Grid from '@material-ui/core/Grid'
import ProjectCard1 from '../../components/projectcard/ProjectCard1'
import ProjectCard2 from '../../components/projectcard/ProjectCard2'
import LuxarityIsMoreCard from '../../components/sections/LuxarityIsMoreCard'

//components
import Wrapper from '../../components/wrapper/Wrapper'

class Dashboard extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <div className="dashboard-main">
            <Grid container>
              <Grid item xs={12} sm={6} className="dashboard-main-info">
                <div className="dashboard-main-info-l">
                  <p className="dashboard-title">Support a cause</p>
                  <p className="dashboard-text">Choose to donate to one or both of these causes. We'll keep in touch with you with updates on their progress over the next few months.</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="dashboard-main-info">
                <div className="dashboard-main-info-l">
                  <div className="cause-donation">
                    <p>Purchase total: <span className="p-tot-amt"> $222.00 </span> </p>
                    <p>Luxarity fee: <span className="lux-fee"> -$20.00 </span> </p>
                    <hr/>
                    <p className="d-tot">Donation total: <span className="d-tot-amt"> $200.00 </span> </p>
                  </div>

                  <button className="p-btn-clear">Split my donation evenly</button>
                </div>
              </Grid>
            </Grid>
          </div>
          <ProjectCard1 />
          <ProjectCard2 />
          <LuxarityIsMoreCard />
        </div>
      </Wrapper>
    )
  }
}

export default Dashboard
