import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

//Return a page with the details of a selected movie
function DetailsPage({ movie }) {
  let posterPath = "";
  if (movie.poster != null) {
    posterPath = "http://image.tmdb.org/t/p/w185" + movie.poster;
  } else {
    posterPath =
      "https://fr.zenit.org/wp-content/uploads/2018/05/no-image-icon-1536x1536.png";
  }
  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={posterPath} alt="movie poster" />
      <p>{movie.rating}</p>
      <p>{movie.genre}</p>
      <p>{movie.date}</p>

      <Link to="/">Back to search results</Link>
    </div>
  );
}

export default DetailsPage;
