import React from "react";

function CardList({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return <div key={movies.indexOf(movie)}>Hello World</div>;
      })}
    </div>
  );
}

export default CardList;
