import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './containers/Dashboard';
import Article from './containers/Article'
import Login from './containers/Login';
import Logout from './containers/Logout'
import DelArticle from './containers/DelArticle'
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
        <Route exact path="/delar/:id" component={DelArticle}/>
        <PrivateRoute path="/home/" component={Dashboard}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));