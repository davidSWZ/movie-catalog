import React, { useState } from "react";
// @todo: Redirect not used but Link doesn't work if deleted
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import fetchAPI from "./api";

/**
 * @param handleMovies set movies state with API search
 */

function SearchBox({ handleMovies }) {
  const [searchField, setSearchField] = useState(); //hook to handle the SearchBox

  //Setup for startCountDown function
  let typingTimer; //timer identifier
  const typingDelay = 2500; //time in ms

  //After typingDelay search movies on API
  const startCountDown = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (searchField) searchMovies();
    }, typingDelay);
  };

  const searchMovies = () => {
    fetchAPI
      .getData("http://localhost:8000/api/movies?search=", searchField)
      .then((movies) => {
        if (!movies) return;

        //keep only necessary data
        const newMovies = movies.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            poster_path: movie.poster_path,
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
      >OK</button>

      <Link to="/new">
        <button className="green-btn">Add movie</button>
      </Link>
    </div>
  );
}

export default SearchBox;
