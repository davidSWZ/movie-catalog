import React from "react";
// ¿¿ Redirect not used but Link doesn't work if deleted ??
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import Poster from "./Poster";

function Card({ movie }) {
  return (
    //Link send to detailsPage
    <Link to={"/" + movie.title + "/" + movie.id}>
      <div className="card">
        <Poster movie={movie} />
        <div className="movie-title">{movie.title}</div>
      </div>
    </Link>
  );
}

export default Card;
