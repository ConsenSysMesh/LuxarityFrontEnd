/* Home View without the use of drizzle components */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//routing
import { Route, Switch } from 'react-router-dom'; //v4
//import App component (acess to the rest of the application)
import App from './App'
//routes (views)
import HomeContainer from './layouts/views/Home/HomeContainer'
import DashboardContainer from './layouts/views/Dashboard/DashboardContainer'
import TestContainer from './layouts/views/Test/TestContainer'
import PopupContainer from './layouts/views/Popup/PopupContainer'
import RawContainer from './layouts/views/Raw/RawContainer'
import RedeemContainer from './layouts/views/Redeem/RedeemContainer'
import SupportContainer from './layouts/views/Support/SupportContainer'

class Layout extends Component {

  render() {

    return(
      <App>
        <Switch>
          <Route exact path="/test" component={TestContainer} />
          <Route exact path="/popup" component={PopupContainer} />
          <Route exact path="/raw" component={RawContainer} />
          <Route exact path="/redeem" component={RedeemContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/support" component={SupportContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </App>
    );

  }
}

Layout.contextTypes = {
  drizzle: PropTypes.object
}

export default Layout
