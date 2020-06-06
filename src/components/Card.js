import React from "react";

function Card({ movie }) {
  console.log(movie);
  return (
    <div className="card">
      <img src={movie.poster} alt="movie poster" />
      <div>{movie.title}</div>
    </div>
  );
}

export default Card;
