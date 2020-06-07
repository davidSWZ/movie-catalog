import React from "react";
// ¿¿ Redirect not used but Link doesn't work if deleted ??
import { BrowserRouter as Redirect, Link, useParams } from "react-router-dom";

import Poster from "./Poster";

/**
 * @return details page of movie
 * @param genres list of genres
 * @param movies result of API search
 */
function DetailsPage({ movies, genres }) {
  let { id } = useParams();

  //keep only the movie matching the url
  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  const getSelectedMovieGenrenames = () => {
    return selectedMovie.genre_ids.map((genre_id) => {
      return (
        <span className="details-info" key={genre_id}>
          { genres[genre_id] }
          <span> | </span>
        </span>
      );
    });
  };

  //if not comming from searchPage, render button redirecting to searchPage
  //@todo discuss if need to access to the page directly from the URL. SEO ?
  if (movies.length === 0) {
    return (
      <div>
        <h1 className="page-name">
          Please come back to the landing page and search movies again
        </h1>
        <Link to="/">
          <button>Back to search</button>
        </Link>
      </div>
    );
    // else return detailsPage
  }
  return (
    <div>
      <h1 className="page-name">{selectedMovie.title}</h1>
      <div className="card detail-card">
        <Poster movie={selectedMovie} />
      </div>
      <p>
        Release date:
        <span className="details-info"> {selectedMovie.release_date} </span>
      </p>
      <p>
        Rating:
        <span className="details-info"> {selectedMovie.vote_average} </span>{" "}
      </p>
      <p>Genre: {getSelectedMovieGenrenames()}</p>

      <Link to="/">
        <button>Back to search</button>
      </Link>
    </div>
  );
}

export default DetailsPage;
