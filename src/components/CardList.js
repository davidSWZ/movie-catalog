import React from "react";
import Card from "./Card";

//Component that will loop on the movies list to display each element
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
