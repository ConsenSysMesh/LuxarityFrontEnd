/* Home View without the use of drizzle components */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//routing
import { Route, Switch } from 'react-router-dom'; //v4
//import App component (acess to the rest of the application)
import App from './App'
//routes (views)
import HomeContainer from './layouts/views/Home/HomeContainer'
import Dashboard from './layouts/views/Dashboard/Dashboard'

class Layout extends Component {

  render() {

    return(
      <App>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </App>
    );

  }
}

Layout.contextTypes = {
  drizzle: PropTypes.object
}

export default Layout
