import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



function Rooms() {
  // Setting our component's initial state
  const [rooms, setRooms] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Rooms and store them with setRooms
  useEffect(() => {
    loadRooms()
  }, [])

  // Loads all Rooms and sets them to Rooms
  function loadRooms() {
    API.getRooms()
      .then(res =>
        setRooms(res.data)
      )
      .catch(err => console.log(err));
  };


  return (
    <Container maxWidth="sm">
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Select rooms</h1>
          </Jumbotron>

          <form>
            <Input
              onChange={() => { }}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={() => { }}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={() => { }}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={() => { }}
            >
              Submit
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Room List</h1>
          </Jumbotron>
          {rooms.length ? (
            <List>
              {rooms.map(room => {
                return (
                  <ListItem key={room._id}>
                    <a href={"/rooms/" + room._id}>
                      <strong>
                        {room.title} by {room.author}
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
    </Container>
  );
}


export default Rooms;
