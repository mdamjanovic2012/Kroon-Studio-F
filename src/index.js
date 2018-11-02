import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import dashboard from './containers/Dashboard';
import Article from './containers/Article'
import Login from './containers/Login';
import Logout from './containers/Logout'
import PrivateRoute from './containers/PrivateRoute';
import configureStore from './store'

const history = createHistory()

const store = configureStore(history)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/logout/" component={Logout}/>
        <PrivateRoute path="/home/" component={dashboard}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));