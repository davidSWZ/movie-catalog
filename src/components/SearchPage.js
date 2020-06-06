import React from "react";

//Import components
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import CardList from "./CardList";

//Landing page of the app
function SearchPage({ movies, handleMovies }) {
  return (
    <div className="container">
      <h1>Movie Kata.log</h1>
      <SearchBox handleMovies={handleMovies} />
      <Scroll>
        <CardList movies={movies} />
      </Scroll>
    </div>
  );
}

export default SearchPage;
