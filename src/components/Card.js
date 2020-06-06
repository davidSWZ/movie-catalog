import React from "react";
//The redirect is not used but if deleted the Link doesn't work
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import Poster from "./Poster";

function Card({ movie }) {
  return (
    <Link to={"/" + movie.title + "/" + movie.id}>
      <div className="card">
        <Poster movie={movie} />
        <div>{movie.title}</div>
      </div>
    </Link>
  );
}

export default Card;
