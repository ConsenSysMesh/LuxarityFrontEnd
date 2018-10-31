/* Home View without the use of drizzle components */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//routing
import { Route, Switch } from 'react-router-dom'; //v4
//import App component (acess to the rest of the application)
import App from './App'
//routes (views)
import TestContainer from './layouts/views/Test/TestContainer'
import RedeemContainer from './layouts/views/Redeem/RedeemContainer'
import SupportContainer from './layouts/views/Support/SupportContainer'

class Layout extends Component {

  render() {

    return(
      <App>
        <Switch>
          <Route exact path="/test" component={TestContainer} />
          <Route exact path="/support/:orderId" component={SupportContainer} />
          <Route exact path="/" component={RedeemContainer} />
        </Switch>
      </App>
    );

  }
}

Layout.contextTypes = {
  drizzle: PropTypes.object
}

export default Layout
