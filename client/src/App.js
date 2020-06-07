import React, { Component } from "react";
import fetchApi from "./components/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], //result of movies search
      genres: [], // list of genres
    };
  }

  //get all genres listed on API once
  componentDidMount() {
    fetchApi.getGenres().then(
      (genres) => {
        let genresList = {}
        genres.forEach(genre => {
          genresList[genre.id] = genre.name
        })
        this.setState({ genres: genresList });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // set movies state with API search
  handleMovies = (movies) => {
    this.setState({ movies: movies });
  };

  render() {
    const { movies, genres } = this.state;

    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <SearchPage movies={movies} handleMovies={this.handleMovies} />
            </Route>

            <Route path="/:movieTitle/:id">
              <DetailsPage movies={movies} genres={genres} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
