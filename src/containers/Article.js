/**
 * Created by milos on 31-Oct-18.
 */
import React from 'react';
import { connect } from 'react-redux'
import {article} from '../actions/article'
import {serverMessage} from '../reducers/index'
import { Redirect } from 'react-router'
import {authErrors, isAuthenticated, getCurrentUser} from '../reducers/index'
import ArticleComp from '../components/ArticleComp'

const Article = (props) => {
    if(!props.isAuthenticated) {
     return  <Redirect to='/login/' />
  }
  return (
       <ArticleComp {...props}/>
  )
};

export default connect(
  state => ({
                message: serverMessage(state),
                errors: authErrors(state),
                isAuthenticated: isAuthenticated(state),
                currentUser: getCurrentUser(state)
            }),
  {   fetchMessage: article
  }
)(Article);
