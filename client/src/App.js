import React, { Component } from "react";
import fetchAPI from "./components/api";
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
    fetchAPI("http://localhost:8000/api/genres", "").then(
      (genres) => {
        this.setState({ genres: genres });
      },
      (error) => {
        console.log(error);
      }
    );
  };

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

            <Route path="/:movieTitle/:id" 
              render={(props) => <DetailsPage genres={genres} id={props.match.params.id} />} 
            />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
