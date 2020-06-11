var mongoose = require('mongoose')

var movieSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  genres: Array,
  note: Number,
  release_date: Date
})

module.exports = mongoose.model('movie', movieSchema)
