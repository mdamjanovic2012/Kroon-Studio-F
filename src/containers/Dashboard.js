/**
 * Created by milos on 31-Oct-18.
 */
import React from 'react';
import { connect } from 'react-redux'
import {dashboard} from '../actions/dashboard'
import {serverMessage} from '../reducers/index'
import { Redirect } from 'react-router'
import {authErrors, isAuthenticated} from '../reducers/index'
import DashboardComp from '../components/DashboardComp'

const Dashboard = (props) => {
  if(!props.isAuthenticated) {
     return  <Redirect to='/login/' />
  }

  return (
       <DashboardComp {...props}/>
  )
};

export default connect(
  state => ({
              message: serverMessage(state),
              errors: authErrors(state),
              isAuthenticated: isAuthenticated(state)
            }),
  {   fetchMessage: dashboard
  }
)(Dashboard);
