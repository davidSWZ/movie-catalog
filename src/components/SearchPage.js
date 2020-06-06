import React, { useState } from "react";

import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import CardList from "./CardList";

function SearchPage({ searchField, setSearchField, movies, setMovies }) {
  return (
    <div className="container">
      <h1>Movie Kata.log</h1>
      <SearchBox
        setSearchField={setSearchField}
        searchField={searchField}
        setMovies={setMovies}
      />
      <Scroll>
        <CardList movies={movies} />
      </Scroll>
    </div>
  );
}

export default SearchPage;
