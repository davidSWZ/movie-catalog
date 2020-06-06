import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Import components
import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], // State to handle the movie list
    };
  }

  //Handle the changes on the movies state
  handleMovies = (newMovieList) => {
    this.setState({ movies: newMovieList });
  };

  render() {
    //Extract movies from this state
    const { movies } = this.state;

    return (
      // Router allow to switch from the two pages of the app
      <Router>
        <Switch>
          {/*Route that display the root of the app, to search movies*/}
          <Route exact path="/">
            <SearchPage movies={movies} handleMovies={this.handleMovies} />
          </Route>

          {/*Route that display the details of the selected movie*/}
          <Route path="/:movieTitle/:id">
            <DetailsPage movies={movies} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
