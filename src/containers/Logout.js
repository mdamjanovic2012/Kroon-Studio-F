/**
 * Created by milos on 31-Oct-18.
 */
import React from 'react';
import { connect } from 'react-redux'
import {logout} from '../actions/logout'
import {serverMessage} from '../reducers/index'
import { Redirect } from 'react-router'
import {authErrors, isAuthenticated, getCurrentUser, logoutTokens} from '../reducers/index'


const Logout = (props) => {
    console.log('CONTAINER LOGOUT')
    console.log(props)
    props.fetchMessage2();
    return <Redirect to='/login/'/>


};

export default connect(
  state => ({
              message: serverMessage(state),
              errors: authErrors(state),
              isAuthenticated: isAuthenticated(state),
              currentUser: getCurrentUser(state)
            }),
  {   fetchMessage2: logout
  }
)(Logout);
