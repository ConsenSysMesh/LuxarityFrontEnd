//import normal react scaffolding to get app started
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'; //v4

//history considerations
import history from './history'; //v4

//import provider and connector from drizzle to ensure contract connectivity
import { DrizzleProvider } from 'drizzle-react'
//loading container (don't really need for luxarity)
//import { LoadingContainer } from 'drizzle-react-components'

//import { PersistGate } from 'redux-persist/integration/react'

//import store and options for application to access
import { store } from './store'
import drizzleOptions from './drizzleOptions'

//import App component (acess to the rest of the application)
import Layout from './Layout'

/*
Description: DrizzleProvider can take options and store -
  options --> contract instantio and configs across app
  store --> state access across app (redux)

Router would also go here if you want to control the navigation
architecture of the application using react-router-redux and react-router
*/
ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
        <Router history={history}>
          <Route path="/" component={Layout} />
        </Router>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
