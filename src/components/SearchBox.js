import React, { useState } from "react";
import fetchApi from "./api";

function SearchBox({ handleMovies }) {
  const [searchField, setSearchField] = useState(); //hook to handle the SearchBox

  //Setup for the input timer
  let typingTimer; //timer identifier
  const typingDelay = 5000; //time in ms

  const searchMovies = () => {
    fetchApi.getMovies(searchField).then((movies) => {
      if (!movies) return;

      //keep necesary data
      movies.forEach((movie) => {
        delete movie.popularity;
        delete movie.vote_count;
        delete movie.video;
        delete movie.adult;
        delete movie.backdrop_path;
        delete movie.original_language;
        delete movie.original_title;
        delete movie.overview;
      });

      //Save movies in state
      handleMovies(movies);
    });
  };

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
            if (searchField) searchMovies();
          }, typingDelay);
        }}
        onKeyDown={() => clearTimeout(typingTimer)}
      />
      <button
        onClick={() => {
          if (searchField) searchMovies();
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
