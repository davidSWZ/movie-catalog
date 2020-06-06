import React, { useState } from "react";
import handleMovieState from "./handleMovieState";

//Return the search input component
function SearchBox({ handleMovies }) {
  const [searchField, setSearchField] = useState(); //hook to handle the SearchBox

  //Setup for the input timer
  let typingTimer; //timer identifier
  const typingDelay = 5000; //time in ms

  return (
    <div>
      <input
        type="search"
        placeholder="search a movie"
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
        onKeyUp={() => {
          clearTimeout(typingTimer);
          typingTimer = setTimeout(() => {
            if (searchField) handleMovieState(handleMovies, searchField);
          }, typingDelay);
        }}
        onKeyDown={() => clearTimeout(typingTimer)}
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
