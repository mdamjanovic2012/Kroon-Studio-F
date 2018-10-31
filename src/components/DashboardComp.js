/**
 * Created by milos on 31-Oct-18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {dashboard} from '../actions/dashboard'
import {serverMessage} from '../reducers/index'
import { Media, Button, Jumbotron,  Form } from 'reactstrap';

export default class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <Media>
              <Media left href="#">
                <Media object data-src="https://mir-s3-cdn-cf.behance.net/user/276/70d8bd4730839.5b2795ed56e18.jpg" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          );
    }
}