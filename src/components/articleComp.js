/**
 * Created by milos on 02-Nov-18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {dashboard} from '../actions/dashboard'
import {serverMessage} from '../reducers/index'
import {CardColumns, CardGroup, CardDeck, Container, Media, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


export default class Atricle extends Component {
    componentDidMount() {
        //console.log('MILOS');
        //console.log(this.props);
        this.props.fetchMessage();


    }


    render() {



        return (
            <Container>
                <h1>HI</h1>
            </Container>
        )
    }
}