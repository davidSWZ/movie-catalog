var express = require('express')
var router = express.Router()
var genre = require('../models/genreModel')

/**
 * Return all genres from DB
 */
router.get('/', function (req, res) {
  genre.find({}, function (err, genres) {
    if (err) {
      console.log(err)
    } else {
      res.send(genres)
    }
  })
})

/**
 * Add new genre to DB
 */
router.post('/', function (req, res) {
  console.log(req.body)
  const newGenre = {
    name: req.body.name
  }
  genre.create(newGenre, function (err, genre) {
    if (err) {
      console.log(err)
    } else {
      console.log(genre)
      res.send('genre successfully added')
    }
  })
})

module.exports = router
