import React, { Component } from 'react'
import logo from '../../img/logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Luxarity Be Up On It</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            <br/><br/>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
