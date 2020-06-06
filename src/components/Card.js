import React from "react";

function Card({ movie }) {
  const posterPath = "http://image.tmdb.org/t/p/w185" + movie.poster;
  console.log(posterPath);
  return (
    <div className="card">
      <img src={posterPath} alt="movie poster" />
      <div>{movie.title}</div>
    </div>
  );
}

export default Card;
