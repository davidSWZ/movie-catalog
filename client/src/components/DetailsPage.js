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
    };
  }

  //get movie info from API and store it in state
  componentDidMount() {
    fetchAPI("http://localhost:8000/api/movies/", this.props.id)
    .then(selectedMovie => {
      this.setState({ movie: selectedMovie[0] })
        console.log(this.state)
      }
    );
  }

  getGenreNames = () => {
    return this.state.movie.genre_ids.map((genre_id) => {
      return (
        <span className="details-info" key={genre_id}>
          { this.prop.genres[genre_id] }
          <span> | </span>
        </span>
      );
    });
  };

  //if not comming from searchPage, render button redirecting to searchPage
  //@todo discuss if need to access to the page directly from the URL. SEO ?
  render() {
    const { movie } = this.state;
    if (movie === null) {
      return (
        <div>
          <h1 className="page-name">
            Please come back to the landing page and search movies again
          </h1>
          <Link to="/">
            <button>Back to search</button>
          </Link>
        </div>
      );
      // else return detailsPage
    }
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
        {/* <p>Genre: {this.getGenreNames()}</p> */}
  
        <Link to="/">
          <button>Back to search</button>
        </Link>
      </div>
    );
  }
}

export default DetailsPage;
