import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'


class ProjectCardList1 extends Component {

  render() {
    return(
      <section style={{backgroundColor: 'rgb(241, 242, 243)'}}>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <div className="project-card1">
              <Grid container style={{height: '100%'}}>
                <Grid item xs={12} sm={4} style={{backgroundImage: 'url('+require("../../img/foo2.jpg")+')', backgroundRepeat: 'no-repeat', backgroundSize:'101%'}}></Grid>
                <Grid item xs={12} sm={8}>
                    <div className="project-card-content" style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '75%'}}>
                      <div>
                        <p className="project-card-sub-title1">Responsible</p>
                        <p className="project-card-title">Hkrita Research</p>
                        <br/>
                        <div className="project-progress-bar">
                          <div className="progress-bar-meter" style={{width: '26%'}}></div>
                        </div>

                        <p className="pledge">$50,320</p>
                        <p className="pledge-sub">pledged of $200,000 goal</p>
                      </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(207,219,210)', height: '25%'}}>
                      <button className="p-btn-dark"> Submit donation </button>
                      <button className="p-btn-light"> Project details </button>
                    </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
      </section>
    )
  }
}

export default ProjectCardList1
