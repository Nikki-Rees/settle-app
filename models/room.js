const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  property_name: { type: String, required: true },
  room_name: { type: String, required: true },
  feature_name: String,
  feature_img: String,
  feature_condition: String,
  feature_description: String,
  date: { type: Date, default: Date.now }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
