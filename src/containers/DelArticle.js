/**
 * Created by milos on 31-Oct-18.
 */
import React from 'react';
import { connect } from 'react-redux'
import {delar} from '../actions/delar'
import {serverMessage} from '../reducers/index'
import { Redirect } from 'react-router'
import {authErrors, isAuthenticated, getCurrentUser} from '../reducers/index'
import DelArticleComp from '../components/DelArticleComp'


const DelArticle = (props) => {
    if(!props.isAuthenticated) {
        console.log('DEL ARTICLE')
        console.log(props)
     return  <Redirect to='/login/' />
  }
      return (
           <DelArticleComp {...props}/>
      )
};

export default connect(
  state => ({
              message: serverMessage(state),
              errors: authErrors(state),
              isAuthenticated: isAuthenticated(state),
                currentUser: getCurrentUser(state)
            }),
  {   fetchMessage2: delar
  }
)(DelArticle);
