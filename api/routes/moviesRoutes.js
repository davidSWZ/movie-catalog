var express = require('express')
var router = express.Router()
var movie = require('../models/movieModel')

/**
 * Get 10 first movies matching query from DB
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
 * Get one movie from the DB
 */
router.get('/:id', function (req, res) {
  const id = req.params.id
  movie.find({ _id: id }, function (err, movie) {
    if (err) {
      console.log(err)
    } else {
      res.send(movie)
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

/**
 * Delete one movie
 */
router.delete('/:id', function (req, res) {
  const id = req.params.id
  movie.deleteOne({ _id: id }, function (err) {
    if (!err) {
      res.send('Movie deleted successfully')
    } else {
      console.log(err)
    }
  })
})

module.exports = router
