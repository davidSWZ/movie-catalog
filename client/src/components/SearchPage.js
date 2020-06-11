import React from "react";

import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import CardList from "./CardList";

/**
 * @return Landing page
 * @param handleMovies set movies state with API search
 * @param movies result of API search
 */
function SearchPage({ movies, handleMovies }) {
  return (
    <div>
      <h1 className="page-name">MOVIE KATA.LOG</h1>
      <SearchBox handleMovies={handleMovies} />
      <Scroll>
        {movies.length === 0 ? <p className="details-info">No result</p> : null}
        <CardList movies={movies} />
      </Scroll>
    </div>
  );
}

export default SearchPage;
