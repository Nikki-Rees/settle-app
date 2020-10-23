import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";


function Home() {
  // Setting our component's initial state

  return (
    <body className="hero-image">
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Landlord</h1>
              <br />
              <Button outline color="info">Sign-in</Button>{''}
            </Jumbotron>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Tenant</h1>
              <br />
              <Button outline color="info">Sign-in</Button>{''}
            </Jumbotron>

          </Col>
        </Row>

      </Container >
    </body>
  );
};


export default Home;
