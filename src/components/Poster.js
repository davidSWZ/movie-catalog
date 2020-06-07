import React from "react";

/**
 * Return the poster image of movie
 */
function Poster(movie) {
  if (movie.movie.poster_path != null) {
    let posterURL = "http://image.tmdb.org/t/p/w185" + movie.movie.poster_path;
    return <img src={posterURL} alt="movie poster" />;
  } else {
    return (
      <div className="img-not-found">
        <p className="no-image-text"> No Image available</p>
      </div>
    );
  }
}

export default Poster;
