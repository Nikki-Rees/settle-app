const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rooms"
);

const roomSeed = [
  {
    property_name: "Freshwater",
    room_name: "Kitchen",
    feature_name: "Kitchen sink",
    feature_img: "../assets/images/countersink.jpg",
    feature_condition: "Good",
    feature_description: "Clean with some little scratches within the tub, taps recently replaced.  Draining freely",
    date: new Date(Date.now())
  }
];

db.Room
  .remove({})
  .then(() => db.Room.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
