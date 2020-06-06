import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

//Return a page with the details of a selected movie
function DetailsPage({ movie }) {
  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt="movie poster" />
      <p>{movie.rating}</p>
      <p>{movie.genre}</p>
      <p>{movie.releaseDate}</p>

      <Link to="/">Back to search results</Link>
    </div>
  );
}

export default DetailsPage;
