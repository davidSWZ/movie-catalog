import React from "react";

/**
 * @return the poster image of movie
 */

function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

function Poster(movie) {
  if (movie.movie.poster_path && checkURL(movie.movie.poster_path)) {
    let posterURL = movie.movie.poster_path;
    return <img src={posterURL} alt="movie poster" />;
  }
  return <p className="no-image-text"> No Image available</p>;
}

export default Poster;
