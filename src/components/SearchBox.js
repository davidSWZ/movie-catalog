import React, { useState } from "react";
import fetchApi from "./api";

/**
 * @param handleMovies Handle movies state of App component
 */

function SearchBox({ handleMovies }) {
  const [searchField, setSearchField] = useState(); //hook to handle the SearchBox

  //Setup for startCountDown function
  let typingTimer; //timer identifier
  const typingDelay = 5000; //time in ms

  //After typingDelay search movies on API
  const startCountDown = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (searchField) searchMovies();
    }, typingDelay);
  };

  const searchMovies = () => {
    fetchApi.getMovies(searchField).then((movies) => {
      if (!movies) return;

      //keep necesary data
      const newMovies = movies.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          genre_ids: movie.genre_ids,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
        };
      });

      //Save movies in state
      handleMovies(newMovies);
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
          startCountDown();
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
