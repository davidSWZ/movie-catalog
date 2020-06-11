var genre = require('./models/genreModel')

var data = [
  {
    name: 'Action'
  },
  {
    name: 'Adulte'
  },
  {
    name: 'Comedy'
  },
  {
    name: 'Documentary'
  },
  {
    name: 'Drama'
  },
  {
    name: 'Horror'
  },
  {
    name: 'One man show'
  }
]

// Add genres to DB at first use of DB
function seedDB () {
  genre.find({}, function (err, genres) {
    if (err) {
      console.log(err)
    } else {
      if (genres.length === 0) {
        data.forEach(function (seed) {
          genre.create(seed, function (err, newGenre) {
            if (err) {
              console.log(err)
            } else {
              console.log(genre)
            }
          })
        })
      }
    }
  })
}

module.exports = seedDB
