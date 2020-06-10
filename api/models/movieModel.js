var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  genre_ids: Array,
  vote_average: Number,
  release_date: Date, // TODO : change to Date format
});

module.exports = mongoose.model("movie", movieSchema);
