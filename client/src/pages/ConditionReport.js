import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import ImageCards from "../components/ImageCard";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, FileBrowser } from "../components/Form";
import ConditionDropdown from "../components/ConditionDropdown";
// import ImageWidget from "../components/ImageWidget"


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
        <h1>PropertyName : RoomName</h1>
        <ImageCards />
      </Row>
      <Row>

        <Col size="md-6 sm-12">

          <h1>Room List</h1>

          {rooms.length ? (
            <List>
              {rooms.map(room => {
                return (
                  <ListItem key={room._id}>
                    <a href={"/rooms/" + room._id}>
                      <strong>
                        {room.name}
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


        <Col size="md-6 sm-12">
          <h1>Add features</h1>
          <form>
            <Input
              onChange={() => { }}
              name="feature_name"
              placeholder="Feature name (required) e.g. Kitchen sink"
            />
            <ConditionDropdown
              onChange={() => { }}
              name="feature_condition"
              placeholder="Condition (required)"
            />
            {/* <ImageWidget /> */}
            <FileBrowser />
            <TextArea
              onChange={() => { }}
              name="feature_description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(formObject.condition && formObject.feature_name)}
              onClick={() => { }}
            >
              Submit
              </FormBtn>
          </form>
        </Col>

      </Row>
    </Container>
  );
}


export default Rooms;
