import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Card({ movie }) {
  let posterPath = "";
  if (movie.poster != null) {
    posterPath = "http://image.tmdb.org/t/p/w185" + movie.poster;
  } else {
    posterPath =
      "https://fr.zenit.org/wp-content/uploads/2018/05/no-image-icon-1536x1536.png";
  }
  return (
    <Link to={"/" + movie.title + "/" + movie.id}>
      <div className="card">
        <img src={posterPath} alt="movie poster" />
        <div>{movie.title}</div>
      </div>
    </Link>
  );
}

export default Card;
