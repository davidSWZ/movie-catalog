import React from "react";

 /**
  * Check if the url end with a image format
  * @param url url of the image
  */
function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

/**
 * @return the poster image of movie
 * @param movie 
 * If movie contains poster_path and checkURL return true, display the image
 * Else return "no image available"
 */
function Poster(movie) {
  if (movie.movie.poster_path && checkURL(movie.movie.poster_path)) {
    let posterURL = movie.movie.poster_path;
    return <img src={posterURL} alt="movie poster" />;
  }
  return <p className="no-image-text"> No Image available</p>;
}

export default Poster;
