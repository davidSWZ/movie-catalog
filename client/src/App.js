import React, { Component } from "react";
import fetchAPI from "./components/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";
import MovieForm from "./components/MovieForm";

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
    fetchAPI.getData("http://localhost:8000/api/genres", "").then(
      (genres) => { this.setState({ genres: genres })}
    );
  }

  // set movies state with API search
  handleMovies = (movies) => {
    this.setState({ movies: movies });
  };

  emptyMovieState = () => {
    this.setState({ movies: [] });
  };

  //Remove deleted movie from movie state
  handleDeletedMovie = (deletedMovieId) => {
    const movies = this.state.movies.filter(
      (movie) => movie.id !== deletedMovieId
    );
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

            <Route
              path="/:movieTitle/:id"
              render={(props) => (
                <DetailsPage
                  genres={genres}
                  id={props.match.params.id}
                  handleDeletedMovie={this.handleDeletedMovie}
                />
              )}
            />

            <Route
              path="/:id"
              render={    (props) => (
                <MovieForm
                  genres={genres}
                  id={props.match.params.id}
                  emptyMovieState={this.emptyMovieState}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
