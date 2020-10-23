import axios from "axios";

export default {
  // Gets all Rooms
  getRooms: function () {
    return axios.get("/api/rooms");
  },
  // Gets the Room with the given id
  getRoom: function (id) {
    return axios.get("/api/rooms/" + id);
  },
  // Deletes the Room with the given id
  deleteRoom: function (id) {
    return axios.delete("/api/rooms/" + id);
  },
  // Saves a Room to the database
  saveRoom: function (roomData) {
    return axios.post("/api/rooms", roomData);
  }
};
