import React from "react";
//The redirect is not used but if deleted the Link doesn't work
import { BrowserRouter as Redirect, Link, useParams } from "react-router-dom";

import Poster from "./Poster";

//Return a page with the details of a selected movie
function DetailsPage({ movies }) {
  let { id } = useParams();
  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  return (
    <div className="container">
      <h1>{selectedMovie.title}</h1>
      <Poster movie={selectedMovie} />
      <p>{selectedMovie.rating}</p>
      <p>{selectedMovie.genre}</p>
      <p>{selectedMovie.date}</p>

      <Link to="/">
        <button>Back to search results</button>
      </Link>
    </div>
  );
}

export default DetailsPage;
