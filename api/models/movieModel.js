var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    poster_path: String,
    genre_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"genre"
    }],
    vote_average: Number,
    release_date: Date,
});

module.exports = mongoose.model("movie", movieSchema);
