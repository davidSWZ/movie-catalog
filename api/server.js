const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mongoose   = require("mongoose");

//Liaison au fichier .env
require('dotenv').config();

//bodyParser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Mongoose configuration
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('the DB is opened');
})

/**
 * Routes configuration
 */

//Movies
var moviesRoutes = require("./routes/moviesRoutes.js");
app.use("/api/movies", moviesRoutes);

//Genres
var genresRoutes = require("./routes/genresRoutes.js");
app.use("/api/genres", genresRoutes);



app.listen(process.env.PORT, function() {
console.log('the server is running successfully')
});
      