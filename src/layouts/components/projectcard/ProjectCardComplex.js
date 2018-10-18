import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'


class ProjectCardComplex extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.formatNum = this.formatNum.bind(this)
    this.chooseSides = this.chooseSides.bind(this)
  }

  chooseSides(side) {
    if (side.toLowerCase() === 'right') {
      return (
        <div className="p-card1" style={{backgroundImage: "url(" + this.props.charityImage + ")", backgroundRepeat: 'no-repeat', backgroundSize: '50% 100%', backgroundPosition: 'right'}}>
          <Grid container style={{padding: 0}}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={7} style={{paddingBottom: 30}}>
              <div className="card-content" >
                <p className="card-sub-title3">{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>

                <p className="card-text">
                  {this.props.cardSummary}
                </p>

                <div className="progress-bar">
                  <div className="progress-bar-meter" style={{width: '20%'}}></div>
                </div>

                <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
                <p className="pledge-sub">pledged of {this.formatNum(this.props.cardGoal)} goal</p>
              </div>

              <button className="p-btn-dark"> Suppport this project </button>
              <button className="p-btn-light"> Charity details </button>
            </Grid>
          </Grid>
        </div>
      )
    } else if (side.toLowerCase() === 'left') {
      return (
        <div className="p-card2" style={{backgroundImage: "url(" + this.props.charityImage + ")", backgroundRepeat: 'no-repeat', backgroundSize: '50% 100%', backgroundPosition: 'left'}}>
          <Grid container>
            <Grid item xs={12} sm={5}></Grid>
            <Grid item xs={12} sm={6} style={{paddingBottom: 30}}>
              <div className="card-content">
                <p className="card-sub-title">{this.props.cardCategory}</p>
                <p className="card-title">{this.props.cardOrgName}</p>

                <p className="card-text">
                  {this.props.cardSummary}
                </p>

                <div className="progress-bar">
                  <div className="progress-bar-meter" style={{width: '20%'}}></div>
                </div>

                <p className="pledge">{this.formatNum(this.props.cardPledged)}</p>
                <p className="pledge-sub">pledged of {this.formatNum(this.props.cardGoal)} goal</p>
              </div>

              <div style={{float: 'right'}}>
                <button className="p-btn-dark"> Suppport this project </button>
                <button className="p-btn-light" style={{marginRight: 0}}> Project details </button>
              </div>
            </Grid>
          </Grid>
        </div>
      )
    }
  }

  formatNum(x) {
    let firstNum =  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return "$" + firstNum
  }

  render() {
    return(
      <section>
        {this.chooseSides(this.props.cardOrientation)}
      </section>
    )
  }
}

export default ProjectCardComplex
