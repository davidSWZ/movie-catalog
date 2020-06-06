import React, { useState } from "react";
import handleMovieState from "./handleMovieState";

//Return the search input component
function SearchBox({ movies, setMovies }) {
  const [searchField, setSearchField] = useState(""); //hook to handle the SearchBox
  return (
    <div>
      <input
        type="search"
        placeholder="search a movie"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button
        onClick={() => {
          handleMovieState(movies, setMovies, searchField);
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
