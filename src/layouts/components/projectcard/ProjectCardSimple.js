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
  }

  formatNum(x) {
    let firstNum =  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return "$" + firstNum
  }

  render() {
    return(
      <section>
        
      </section>
    )
  }
}

export default ProjectCardComplex
