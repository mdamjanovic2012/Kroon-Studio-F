import React, { Component } from 'react';
import { connect } from 'react-redux'
import {echo} from './actions/echo'
import {serverMessage} from './reducers/index'


class App extends Component {
  componentDidMount() {
      this.props.fetchMessage();
  }
render() {
    return (
      <div>
        <h2>Welcome to React</h2>
          this.props.message.map((prop, index) => (
            <p>prop</p>
          ))

      </div>
    );
  }
}
export default connect(
  state => ({ message: serverMessage(state) }),
  { fetchMessage: echo}
)(App);