import React from "react";
// ¿¿ Redirect not used but Link doesn't work if deleted ??
import { BrowserRouter as Redirect, Link, useParams } from "react-router-dom";

import Poster from "./Poster";

/**
 * Return details page of movie
 * @param selectedMovie keep only the movie matching the url
 */
function DetailsPage({ movies, genres }) {
  let { id } = useParams();

  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  //compare movie genre_id with list of genres
  //return name
  const getGenreNames = () => {
    return selectedMovie.genre_ids.map((genre_id) => {
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
    });
  };

  //if not comming from searchPage, render button redirecting to searchPage
  if (movies.length === 0) {
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
    // else return detailsPage
  } else {
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
        <p>Genre: {getGenreNames()}</p>

        <Link to="/">
          <button>Back to search</button>
        </Link>
      </div>
    );
  }
}

export default DetailsPage;
