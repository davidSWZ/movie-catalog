import React from "react";
import fetchAPI from "./api";

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
          //handleMovieState();
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
