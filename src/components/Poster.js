import React from "react";

//Return the poster image of a movie
function Poster(movie) {
  //Variable that will contain the URL of the image
  let posterURL = "";

  //If the poster exist use the poster, else use a generic image
  if (movie.movie.poster != null) {
    posterURL = "http://image.tmdb.org/t/p/w185" + movie.movie.poster;
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
