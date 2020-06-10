const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Liaison au fichier .env
require("dotenv").config();

// Cors configuration
app.use(cors());
app.use(cors({ origin: "*" }));

// bodyParser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose configuration
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("the DB is opened");
});

/**
 * Routes configuration
 */

// Movies
var moviesRoutes = require("./routes/moviesRoutes.js");
app.use("/api/movies", moviesRoutes);

// Genres
var genresRoutes = require("./routes/genresRoutes.js");
app.use("/api/genres", genresRoutes);

app.listen(process.env.PORT, function () {
  console.log("the server is running successfully");
});
