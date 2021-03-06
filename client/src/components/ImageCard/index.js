import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import "./style.css"

export default function ImageCards(props) {
    return (
        <div className="main">
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="../assets/images/countersink.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.feature_name} Feature name</CardTitle>
                        <CardSubtitle>{props.feature_condition} Feature condition</CardSubtitle>
                        <CardText>{props.feature_description} Feature description, this card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Edit</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/underkitchensink.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="../assets/images/stovetop.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );
};

