import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Checkbox, CustomSelect, FileBrowser, Toolbar } from "../components/Form";
import { AddressForm } from "../components/AddressForm";
import { FormGroup } from "reactstrap";

function Rooms() {
  // Setting our component's initial state
  const [rooms, setRooms] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all rooms and store them with setrooms
  useEffect(() => {
    loadRooms()
  }, [])

  // Loads all books and sets them to books
  function loadRooms() {
    API.getRooms()
      .then(res =>
        setRooms(res.data)
      )
      .catch(err => console.log(err));
  };


  return (

    <Container fluid>
      <Row>
        <Col size="md-8">
          <h1>
            Property info
          </h1>
          <AddressForm />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">

          <h1>Select the rooms</h1>

          <form>
            <FormGroup>
              <Toolbar />
            </FormGroup>

            <Input
              onChange={() => { }}
              name="Other"
              placeholder="Other (required)"
            />

            <TextArea
              onChange={() => { }}
              name="Description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(formObject.name && formObject.quantity)}
              onClick={() => { }}
            >
              Submit Rooms
              </FormBtn>

          </form>
        </Col>

        <Col size="md-6 sm-12">

          <h1>Property name</h1>

          {rooms.length ? (
            <List>
              {rooms.map(room => {
                return (
                  <ListItem key={room._id}>
                    <a href={"/rooms/" + room._id}>
                      <strong>
                        {room.name} and {room.number}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => { }} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>

    </Container >
  );
}


export default Rooms;
