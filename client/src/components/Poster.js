import React from "react";

/**
 * @return the poster image of movie
 */

function Poster(movie) {
  if (movie.movie.poster_path) {
    let posterURL = movie.movie.poster_path;
    return <img src={posterURL} alt="movie poster" />;
  }
  return <p className="no-image-text"> No Image available</p>;
}

export default Poster;
