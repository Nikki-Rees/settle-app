const express = require("express");
// const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  name: 'session-id',
  secret: '123-456-789',
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/", routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rooms",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

  });

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("Mongo DB connection established")
})
connection.on('error', console.error.bind(console, 'mongo connection error'))


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
