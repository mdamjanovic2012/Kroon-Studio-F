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


export default class Dashboard extends Component {
    componentDidMount() {
        //console.log('MILOS');
        //console.log(this.props);
        this.props.fetchMessage();


    }


    render() {
            function canDeleteArticles(props, ar_user, ar_id) {
                if (props.currentUser.user_id == ar_user.pk) {
                    return (<div>
                                <Button color="primary">EDIT</Button>{' '}
                                <Button href={"/delar/" + ar_id} color="danger">DELETE</Button>
                            </div>
                            )
                }

            }
          function createArticless(props) {
            return Object.keys(props.message).map((key, index)=>
                <Card>
                    <Media top width="100%" href="#">
                        <Media object src={require('./assets/images/kroon.jpg')}
                               alt="Generic placeholder image"/>
                    </Media>
                    <CardBody>
                        <CardSubtitle>Author: {props.message[key].created_by_user_id.username}</CardSubtitle>
                        <a href="#"><CardTitle>{props.message[key].title}</CardTitle></a>
                        <CardSubtitle>{props.message[key].updated_at}</CardSubtitle>

                        <CardText>{props.message[key].content.substring(0,60)}</CardText>
                        <CardSubtitle>{props.message[key].category_id.title}</CardSubtitle>
                        {canDeleteArticles(props, props.message[key].created_by_user_id, props.message[key].id)}

                    </CardBody>
                </Card>)
          }

        return (
            <Container>
                <NavbarComp/>
                {createArticless(this.props)}
            </Container>
        )
    }
}