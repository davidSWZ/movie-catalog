import React, { Component } from "react";
//todo Redirect not used but Link doesn't work if deleted?
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import fetchAPI from "./api";
import Poster from "./Poster";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}, //result of one movie search
      genreNames: [], //genre names of one movie
      redirection: false, //used to redirect after movie deleted
      error: false, //used if error during movie delete
    };
  }

  //get movie info from API and store it in state
  componentDidMount() {
    fetchAPI
      .fetchData("http://localhost:8000/api/movies/", "get", this.props.id)
      .then((selectedMovie) => {
        this.setState({ movie: selectedMovie[0] });
        this.getGenreNames();
      });
  }

  //get genre names for one movie
  getGenreNames = () => {
    const genreNames = this.props.genres.filter(
      (genre) => genre._id === this.state.movie.genre_ids
    );
    this.setState({ genreNames: genreNames });
  };

  //display all movie genres
  displayGenreNames = () => {
    return this.state.genreNames.map((genreName) => {
      return (
        <span className="details-info" key={genreName._id}>
          {genreName.name}
          <span> | </span>
        </span>
      );
    });
  };

  //Delete movie in DB
  //then display redirect button
  //then delete movie from state
  handleDeleteData = () => {
    fetchAPI
      .fetchData(
        "http://localhost:8000/api/movies/",
        "delete",
        this.state.movie._id
      )
      .then((res) => {
        if (res.success) {
          this.setState({ redirection: true });
          this.props.handleDeletedMovie(this.state.movie._id);
        } else {
          this.setState({ error: true });
        }
      });
  };

  //if not comming from searchPage, render button redirecting to searchPage
  //@todo discuss if need to access to the page directly from the URL. SEO ?
  render() {
    const { movie, redirection, error } = this.state;
    if (movie === undefined || redirection) {
      return (
        <div>
          <h1 className="page-name">
            Movie deleted! Please come back to the landing page
          </h1>
          <Link to="/">
            <button>Back to search</button>
          </Link>
        </div>
      );
    }
    // else return detailsPage
    return (
      <div>
        <h1 className="page-name">{movie.title}</h1>
        <div className="card detail-card">
          <Poster movie={movie} />
        </div>
        <p>
          Release date:
          <span className="details-info"> {movie.release_date} </span>
        </p>
        <p>
          Rating:
          <span className="details-info"> {movie.vote_average} </span>{" "}
        </p>
        <p>Genre: {this.displayGenreNames()}</p>

        <Link to="/">
          <button>Back to search</button>
        </Link>

        <button className="green-btn" onClick={() => null}>
          Modify
        </button>

        <button className="delete-btn" onClick={() => this.handleDeleteData()}>
          Delete
        </button>

        {error ? <p>An error occured</p> : null}
      </div>
    );
  }
}

export default DetailsPage;
