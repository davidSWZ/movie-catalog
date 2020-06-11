import React, { Component } from "react";
// @todo Redirect not used but Link doesn't work if deleted?
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import fetchAPI from "./api";
import Poster from "./Poster";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        poster_path: "",
        genres: [],
        release_date: "",
        note: "",
      }, // the movie to be displayed
      redirection: false, // used to redirect after movie is deleted
      error: false, // used to display message if error during movie delete
    };
  }

  // get movie info from API and store it in state
  componentDidMount() {
    fetchAPI.getOneMovie(this.props.id)
    .then(movie => {
      this.setState({ movie : movie });
    })
  }

  // display all genres of the movie
  displayGenre = () => {
    return this.state.movie.genres.map((genre, index) => {
      return <span key={index} className="details-info genre">{genre}</span>;
    });
  };


  handleDeleteData = () => {
    // Delete movie in DB
    fetchAPI
      .deleteMovie(this.state.movie._id) 
      .then((res) => {
        if (res.success) {
          this.setState({ redirection: true }); // then display redirect button
          this.props.handleDeletedMovie(this.state.movie._id);// then delete movie from movies state
        } else {
          this.setState({ error: true }); 
        }
      });
  };

  
  // @todo discuss if need to access to the page directly from the URL. SEO ?
  render() {
    const { movie, redirection, error } = this.state;

    // if not comming from searchPage
    // or if movie added or updated to DB
    // render button redirecting to searchPage
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
          <span className="details-info"> {movie.note} </span>{" "}
        </p>
        
        <p>Genre: {this.displayGenre()}</p>

        <Link to="/">
          <button>Return</button>
        </Link>

        <Link to={"/" + movie._id}>
          <button className="green-btn">Modify</button>
        </Link>

        <button className="delete-btn" onClick={() => this.handleDeleteData()}>
          Delete
        </button>

        {error ? <p>An error occured</p> : null}
      </div>
    );
  }
}

export default DetailsPage;
