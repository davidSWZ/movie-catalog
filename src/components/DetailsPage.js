import React from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

//Return a page with the details of a selected movie
function DetailsPage({ movies }) {
  let { id } = useParams();
  const selectedMovie = movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  let posterPath = "";
  if (selectedMovie.poster != null) {
    posterPath = "http://image.tmdb.org/t/p/w185" + selectedMovie.poster;
  } else {
    posterPath =
      "https://fr.zenit.org/wp-content/uploads/2018/05/no-image-icon-1536x1536.png";
  }
  return (
    <div className="container">
      <h1>{selectedMovie.title}</h1>
      <img src={posterPath} alt="movie poster" />
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
