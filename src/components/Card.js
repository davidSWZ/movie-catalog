import React from "react";

function Card({ movie }) {
  let posterPath = "";
  if (movie.poster != null) {
    posterPath = "http://image.tmdb.org/t/p/w185" + movie.poster;
  } else {
    posterPath =
      "https://fr.zenit.org/wp-content/uploads/2018/05/no-image-icon-1536x1536.png";
  }
  return (
    <div className="card">
      <img src={posterPath} alt="movie poster" />
      <div>{movie.title}</div>
      <button className="detail-btn">Details</button>
    </div>
  );
}

export default Card;
