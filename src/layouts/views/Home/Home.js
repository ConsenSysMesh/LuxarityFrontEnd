import React, { Component } from 'react'
import logo from '../../img/logo.png'
//components
import Wrapper from '../../components/wrapper/Wrapper'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div className="pure-g" style={{backgroundColor: 'grey', paddingTop: '3%'}}>
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Luxarity Be Up On It</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            <br/><br/>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Home
