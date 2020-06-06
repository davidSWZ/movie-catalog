import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

function App() {
  //Global states definitions
  const [movies, setMovies] = useState([]); //hook to handle the movies list

  return (
    // Router allow to switch from the two pages of the app
    <Router>
      <Switch>
        {/*Route that display the root of the app, to search movies*/}
        <Route exact path="/">
          <SearchPage movies={movies} setMovies={setMovies} />
        </Route>

        {/*Route that display the details of the selected movie*/}
        <Route path="/:movieTitle/:movieId">
          <DetailsPage movie={movies[0]} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
