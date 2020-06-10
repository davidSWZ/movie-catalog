import React, { Component } from "react";
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import fetchAPI from "./api";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      unfullfilled: false,
      changeCommited: false, //used to redirect after movie added or modified
      movie: {
        title: "",
        poster_path: "",
        genre_ids: [1],
        release_date: "",
        vote_average: "",
      },
    };
  }

  //get movie info from API and store it in state
  componentDidMount() {
    if (this.props.id == "new") return;
    fetchAPI
      .fetchData("http://localhost:8000/api/movies/", "get", this.props.id)
      .then((selectedMovie) =>
        this.setState({
          movie: {
            title: selectedMovie[0].title,
            // poster_path: selectedMovie[0].poster_path,
            genre_ids: selectedMovie[0].genre_ids,
            release_date: selectedMovie[0].release_date,
            vote_average: selectedMovie[0].vote_average,
          },
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      movie: { ...this.state.movie, [e.target.name]: e.target.value },
    });
  };

  createGenreCheckbox = (genres) => {
    const checkBoxes = [];
    for (const genre of genres) {
      checkBoxes.push(
        <div key={genre._id}>
          <input
            className="checkbox"
            type="checkbox"
            id={genre._id}
            name="genre_ids"
            value={genre._id}
            onClick={(e) => this.handleGenresInput(e)}
          />
          <label className="details-info" htmlFor={genre._id}>
            {genre.name}
          </label>
        </div>
      );
    }
    return <div className="checkbox-container">{checkBoxes}</div>;
  };

  createNoteCheckbox = (elements) => {
    const checkBoxes = [];
    for (const element of elements) {
      checkBoxes.push(
        <div key={element}>
          <input
            className="checkbox"
            type="radio"
            id={element}
            name="vote_average"
            value={element}
            onClick={(e) => this.handleChange(e)}
          />
          <label className="details-info" htmlFor={element}>
            {element}
          </label>
        </div>
      );
    }

    return <div className="checkbox-container">{checkBoxes}</div>;
  };

  saveNewMovie = (e) => {
    e.preventDefault();
    if (this.controlForm()) {
      this.sendData();
    } else {
      this.displayUnfullfilledFormMessage();
    }
  };

  controlForm = () => {
    if (
      this.state.movie.title !== "" &&
      this.state.movie.poster_path !== "" &&
      this.state.movie.genre_ids.length !== 0 &&
      this.state.movie.release_date !== "" &&
      this.state.movie.vote_average !== ""
    )
      return true;
  };

  sendData = () => {
    if (this.props.id == "new") {
      fetchAPI.addMovie(this.state.movie).then((res) => {
        if (res.success) {
          this.setState({ changeCommited: true });
        } else {
          this.setState({ error: true });
        }
      });
    } else {
      fetchAPI.updateMovie(this.props.id, this.state.movie).then((res) => {
        if (res.success) {
          this.setState({ changeCommited: true });
        } else {
          this.setState({ error: true });
        }
      });
    }
  };

  displayUnfullfilledFormMessage = () => {
    this.setState({ unfullfilled: true });
    setTimeout(() => this.setState({ unfullfilled: false }), 5000);
  };

  render() {
    const {
      title,
      poster_path,
      genres,
      release_date,
      vote_average,
    } = this.state.movie;

    if (this.state.movie === undefined || this.state.changeCommited) {
      return (
        <div>
          <h1 className="page-name">
            Movie added successfully! Please come back to the landing page
          </h1>
          <Link to="/">
            <button>Back to search</button>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h1 className="page-name">MOVIE FORM</h1>
        <form>
          <div>
            <div>
              <label htmlFor="title" className="details-info">
                Title
              </label>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              className="add-form-input"
              placeholder="title"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <div>
              <label htmlFor="poster_path" className="details-info">
                Poster
              </label>
            </div>
            <input
              type="file"
              id="poster_path"
              name="poster_path"
              value={poster_path}
              className="add-form-input"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label htmlFor="release_date" className="details-info">
            Genres
          </label>
          <div>{this.createGenreCheckbox(this.props.genres)}</div>
          <div>
            <label htmlFor="release_date" className="details-info">
              Release date
            </label>
          </div>
          <div>
            <input
              type="date"
              id="release_date"
              name="release_date"
              value={release_date}
              className="add-form-input"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label className="details-info">Note</label>
          <div>{this.createNoteCheckbox([1, 2, 3, 4, 5])}</div>

          {this.state.unfullfilled ? (
            <p className="details-info">
              please fill all entries in the form before saving
            </p>
          ) : null}

          {this.state.error ? (
            <p className="details-info">An error occured</p>
          ) : null}

          <button
            className="add-movie-btn"
            onClick={(e) => this.saveNewMovie(e)}
          >
            Add movie
          </button>
        </form>
      </div>
    );
  }
}
export default MovieForm;