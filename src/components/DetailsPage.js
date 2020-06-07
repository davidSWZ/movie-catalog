import React from "react";
//The redirect is not used but if deleted the Link doesn't work
import { BrowserRouter as Redirect, Link, useParams } from "react-router-dom";

import Poster from "./Poster";

//Return a page with the details of a selected movie
function DetailsPage({ movies }) {
  let { id } = useParams();

  //Prevent someone to accidentally go to the DetailsPage and have an error
  if (movies.length === 0)
    return (
      <div className="container">
        <h1 className="page-name">
          Please come back to the landing page and search movies again
        </h1>
        <Link to="/">
          <button>Back to search</button>
        </Link>
      </div>
    );

  //Select the good movie in regard to the params
  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  return (
    <div className="container">
      <h1 className="page-name">{selectedMovie.title}</h1>
      <div className="card detail-card">
        <Poster movie={selectedMovie} />
      </div>
      <p>
        Release date:
        <span className="details-info"> {selectedMovie.date} </span>
      </p>
      <p>
        Rating: <span className="details-info"> {selectedMovie.rating} </span>{" "}
      </p>
      <p>
        Genre:
        {selectedMovie.genre.map((genre) => {
          return (
            <span
              className="details-info"
              key={selectedMovie.genre.indexOf(genre)}
            >
              {" "}
              {genre} |
            </span>
          );
        })}
      </p>

      <Link to="/">
        <button>Back to search</button>
      </Link>
    </div>
  );
}

export default DetailsPage;
