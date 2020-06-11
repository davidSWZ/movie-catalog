import React, { Component } from "react";
// @todo Redirect not used but Link doesn't work if deleted?
import { BrowserRouter as Redirect, Link } from "react-router-dom";

import fetchAPI from "./api";
import NoteCheckboxes from "./NoteCheckBoxes";
import GenreCheckBoxes from "./GenreCheckBoxes";
import SimpleInput from "./SimpleInput";
import RedirectPage from "./RedirectPage";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false, // used to display warning message if API request unsuccessfull
      unfullfilled: false, // used to display warning if all input no filled
      changeCommited: false, //used to redirect after movie added or modified
      movie: {
        title: "",
        poster_path: "",
        genres: [],
        release_date: "",
        note: "",
      },
    };
  }

  //get movie info from API and store it in state
  componentDidMount() {
    if (this.props.id === "new") return;
    fetchAPI.getOneMovie(this.props.id)
    .then(movie => this.setState({ movie : movie }))
  }

  // Set movie state with inputs values
  handleChange = (e) => {
    this.setState({
      movie: { ...this.state.movie, [e.target.name]: e.target.value },
    });
  };

  // Set movie.genres state with checkboxes values
  handleGenreCheckboxChange = (checkBoxGenre, checked) => {
    if (checked) { // we uncheck the box : remove genre
      this.setState((prevState) => ({
        movie: {
          ...prevState.movie,
          genres: prevState.movie.genres.filter(
            (genre) => checkBoxGenre !== genre
          ),
        },
      }));
    } else { // we check the box : add genre
      this.setState((prevState) => ({
        movie: {
          ...prevState.movie,
          genres: [...prevState.movie.genres, checkBoxGenre],
        },
      }));
    }
  };

  saveNewMovie = (e) => {
    e.preventDefault();
    if (this.controlForm()) {
      this.sendData();
    } else {
      this.warningMessage();
    }
  };

  controlForm = () => {
    const { title, poster_path, genres, release_date, note } = this.state.movie; 
    if (
      title !== "" &&
      poster_path !== "" &&
      genres.length !== 0 &&
      release_date !== "" &&
      note !== ""
    )
      return true;
  };

  sendData = () => {
    // if new movie : add it in DB
    if (this.props.id === "new") {
      fetchAPI.addMovie(this.state.movie).then((res) => {
        if (res.success) {
          this.setState({ changeCommited: true });
          this.props.emptyMovieState(); // used to reinitialize searchPage before redirect to it
        } else {
          this.setState({ error: true });
        }
      });
      // if existing movie : modify it in DB
    } else {
      fetchAPI.updateMovie(this.props.id, this.state.movie).then((res) => {
        if (res.success) {
          this.setState({ changeCommited: true });
          this.props.emptyMovieState(); // used to reinitialize searchPage before redirect to it
        } else {
          this.setState({ error: true });
        }
      });
    }
  };

  // used to display warning message when all input are not filled
  // message displayed 5s
  warningMessage = () => {
    this.setState({ unfullfilled: true });
    setTimeout(() => this.setState({ unfullfilled: false }), 5000);
  };

  render() {
    const { title, poster_path, genres, release_date, note } = this.state.movie;

    //if not comming directly to the page or if change made successfully in BD 
    if (this.state.movie === undefined || this.state.changeCommited) {
      return <RedirectPage id={this.props.id} />
    }
    // Else return form
    return (
      <div>
        <h1 className="page-name">MOVIE FORM</h1>
        <form>
        <SimpleInput 
          attribute="title" 
          type="text" 
          value={title} 
          placeHolder="Entre ther title"
          handleChange={this.handleChange}
          />

        <SimpleInput 
          attribute="poster_path" 
          type="text" 
          value={poster_path} 
          placeHolder="Enter an url (jpeg, jpg, gif, png)"
          handleChange={this.handleChange}
          />

        <GenreCheckBoxes
            genres={this.props.genres}
            handleGenreCheckboxChange={this.handleGenreCheckboxChange}
            movieGenres={genres}
          />

        <SimpleInput 
          attribute="release_date" 
          type="date" 
          value={release_date} 
          handleChange={this.handleChange}
          />
         
        <NoteCheckboxes
          values={["1", "2", "3", "4", "5"]}
          note={note}
          handleChange={this.handleChange}
          />

          {/* Checked if all inputs are filled, if not display warning */}
          {this.state.unfullfilled ? (
            <p className="details-info">
              please fill all entries in the form before saving
            </p>
          ) : null}

          {/* if API request is not successfull : display warning */}
          {this.state.error ? (
            <p className="details-info">An error occured</p>
          ) : null}

          <Link to="/">
            <button>Return</button>
          </Link>

          {/* If url param = new : display add button, if not display modify button */}
          {this.props.id === "new" ? (
            <button className="green-btn" onClick={(e) => this.saveNewMovie(e)}>
              Add movie
            </button>
          ) : (
            <button className="green-btn" onClick={(e) => this.saveNewMovie(e)}>
              modify movie
            </button>
          )}
        </form>
      </div>
    );
  }
}
export default MovieForm;
