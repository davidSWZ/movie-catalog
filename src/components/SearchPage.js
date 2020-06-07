import React from "react";

import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import CardList from "./CardList";

/**
 * Landing page
 * @param handleMovies Handle movies state of App component
 * @param movies result of API search
 */

function SearchPage({ movies, handleMovies }) {
  return (
    <div className="container">
      <h1 className="page-name">MOVIE KATA.LOG</h1>
      <SearchBox handleMovies={handleMovies} />
      <Scroll>
        <CardList movies={movies} />
      </Scroll>
    </div>
  );
}

export default SearchPage;
