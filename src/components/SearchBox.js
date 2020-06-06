import React, { useState } from "react";
import handleMovieState from "./handleMovieState";

//Return the search input component
function SearchBox({ handleMovies }) {
  const [searchField, setSearchField] = useState(); //hook to handle the SearchBox

  return (
    <div>
      <input
        type="search"
        placeholder="search a movie"
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (searchField) handleMovieState(handleMovies, searchField);
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
