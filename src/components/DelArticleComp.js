/**
 * Created by milos on 31-Oct-18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {dashboard} from '../actions/dashboard'
import {serverMessage} from '../reducers/index'
import {CardColumns, CardGroup, CardDeck, Container, Media, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import NavbarComp from './Navbar'


export default class DelArticleComp extends Component {
    componentDidMount() {
        //console.log('MILOS');
        //console.log(this.props);
        this.props.fetchMessage2();


    }


    render() {
            return (
            <h1>HI</h1>
        )
    }
}