import React from "react";
import Card from "./Card";

//display list of movies
function CardList({ movies }) {
  return (
    <div className="cardlist">
      {movies.map((movie) => {
        return <Card key={movies.indexOf(movie)} movie={movie} />;
      })}
    </div>
  );
}

export default CardList;
