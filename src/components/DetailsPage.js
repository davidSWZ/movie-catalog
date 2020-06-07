import React from "react";
//The redirect is not used but if deleted the Link doesn't work
import { BrowserRouter as Redirect, Link, useParams } from "react-router-dom";

import Poster from "./Poster";

//Return a page with the details of a selected movie
function DetailsPage({ movies, genres }) {
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

  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );
  console.log(selectedMovie.genre_ids);
  console.log(genres.genres);
  return (
    <div className="container">
      <h1 className="page-name">{selectedMovie.title}</h1>
      <div className="card detail-card">
        <Poster movie={selectedMovie} />
      </div>
      <p>
        Release date:
        <span className="details-info"> {selectedMovie.release_date} </span>
      </p>
      <p>
        Rating:{" "}
        <span className="details-info"> {selectedMovie.vote_average} </span>{" "}
      </p>
      <p>
        Genre:{" "}
        {selectedMovie.genre_ids.map((genre_id) => {
          return (
            <span className="details-info" key={genre_id}>
              {
                genres.genres.find(
                  (genre) => genre.id.toString() === genre_id.toString()
                ).name
              }{" "}
              |{" "}
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
