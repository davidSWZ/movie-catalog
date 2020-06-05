import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";

function App() {
  //Global states definitions
  const [searchField, setSearchField] = useState(""); //hook to handle the SearchBox
  const [movies, setMovies] = useState([
    {
      poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/26/18686482.jpg",
      title: "Back to the futur",
    },
    {
      poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/26/18686482.jpg",
      title: "Back to the futur",
    },
  ]); //hook to handle the movies list

  return (
    // Router allow to switch from the two pages of the app
    <Router>
      <Switch>
        {/*Route that display the root of the app, to search movies*/}
        <Route exact path="/">
          <div className="container">
            <h1>Movie Kata.log</h1>
            <SearchBox
              fetchAPI={() => console.log("fetchAPI with: " + searchField)}
              setSearchField={setSearchField}
            />
            <Scroll>
              <CardList movies={movies} />
            </Scroll>
          </div>
        </Route>

        {/*Route that display the details of the selected movie*/}
        <Route path="/:movieTitle/:movieId">
          <p>Details Page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
