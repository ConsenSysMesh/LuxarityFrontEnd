import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'


class ProjectCard2 extends Component {

  render() {
    return(
      <section>
        <div className="p-card2">
          <Grid container>
            <Grid item xs={12} sm={5}></Grid>
            <Grid item xs={12} sm={5}>
              <div className="card-content">
                <p className="card-sub-title">Aware</p>
                <p className="card-title">Health + wellness hackathon</p>

                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada.
                </p>

                <div className="progress-bar">
                  <div className="progress-bar-meter" style={{width: '26%'}}></div>
                </div>

                <p className="pledge">$50,320</p>
                <p className="pledge-sub">pledged of $200,000 goal</p>
              </div>

              <button className="p-btn-dark"> Suppport this project </button>
              <button className="p-btn-light"> Project details </button>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}

export default ProjectCard2
