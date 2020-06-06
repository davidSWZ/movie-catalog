import React from "react";

//Return the poster image of a movie
function Poster(movie) {
  //Variable that will contain the URL of the image
  let posterURL = "";

  //If the poster exist use the poster, else use a generic image
  if (movie.movie.poster != null) {
    posterURL = "http://image.tmdb.org/t/p/w185" + movie.movie.poster;
  } else {
    posterURL =
      "https://fr.zenit.org/wp-content/uploads/2018/05/no-image-icon-1536x1536.png";
  }
  return <img src={posterURL} alt="movie poster" />;
}

export default Poster;
