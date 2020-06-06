import React from "react";
import handleMovieState from "./handleMovieState";

//Return the search input component
function SearchBox({ searchField, setSearchField, movies, setMovies }) {
  return (
    <div>
      <input
        type="search"
        placeholder="search a movie"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button
        onClick={() => {
          handleMovieState(setMovies, searchField);
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
