import React from "react";

/**
 * @return the poster image of movie
 */
function Poster(movie) {
  if (movie.movie.poster_path != null) {
    let posterURL = movie.movie.poster_path;
    return <img src={posterURL} alt="movie poster" />;
  }
  return (
    <div className="img-not-found">
      <p className="no-image-text"> No Image available</p>
    </div>
  );
}

export default Poster;
