var express = require('express')
var router = express.Router()
var movie = require('../models/movieModel')

/**
 * Return movies matching query from DB
 */
router.get('/', function (req, res) {
  const search = req.query.search
  movie.find({ title: new RegExp(search, 'i') })
    .limit(10)
    .sort({ title: 1 })
    .exec(
      function (err, movies) {
        if (err) {
          console.log(err)
        } else {
          res.send(movies)
        }
      })
})

/**
 * Add new movie to DB
 */
router.post('/', function (req, res) {
  const newMovie = {
    title: req.body.title,
    poster_path: req.body.poster_path,
    genre_ids: req.body.genre_ids,
    vote_average: req.body.vote_average,
    release_date: req.body.release_date
  }
  movie.create(newMovie, function (err, movie) {
    if (err) {
      console.log(err)
    } else {
      console.log(movie)
      res.send('movie successfully added')
    }
  })
})

module.exports = router
