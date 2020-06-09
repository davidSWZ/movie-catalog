import React from "react";
// Todo Redirect not used but Link doesn't work if deleted ??
import { BrowserRouter as Redirect, Link } from "react-router-dom";

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
        <CardList movies={movies} />
      </Scroll>
      <Link to="/add">
        <button className="add-btn">Add movie</button>
      </Link>
    </div>
  );
}

export default SearchPage;
