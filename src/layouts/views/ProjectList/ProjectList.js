import React, { Component } from 'react'
import logo from '../../img/logo.png'
import Grid from '@material-ui/core/Grid'
import ProjectCardList1 from '../../components/projectcardlist/ProjectCardList1'
import ProjectCardList2 from '../../components/projectcardlist/ProjectCardList2'
import LuxarityIsMoreCard from '../../components/sections/LuxarityIsMoreCard'

//components
import Wrapper from '../../components/wrapper/Wrapper'

class ProjectList extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <div className="p-landing-splash">
            <Grid container>
              <Grid item xs={12} sm={3}></Grid>
              <Grid item xs={12} sm={6}>
                  <p className="p-splash-heading">Pop up hero splash</p>
                  <p className= "p-splash-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada.</p>

              </Grid>
              <Grid item xs={12} sm={3}></Grid>
            </Grid>
          </div>
          <ProjectCardList1 />
          <ProjectCardList2 />
          <LuxarityIsMoreCard />
        </div>
      </Wrapper>
    )
  }
}

export default ProjectList
