import React, { Component } from "react";
import fetchApi from "./components/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

/**
 * @param handleMovies Handle movies state of App component
 * @param movies result of movies search
 * @param genres result of all genres listed on API
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
    };
  }

  componentDidMount() {
    fetchApi.getGenres().then(
      (genres) => {
        this.setState({ genres: genres });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Handle movies state
  handleMovies = (movies) => {
    this.setState({ movies: movies });
  };

  render() {
    const { movies, genres } = this.state;

    return (
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
    );
  }
}

export default App;
