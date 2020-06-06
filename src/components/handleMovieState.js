import fetchAPI from "./api";

//Take the response from the API and for each movie, keep only :
//title, poster, ratings, genre and release date
const handleMovieState = (movies, setMovies, searchField) => {
  //reinitiate the movie state to start a new search
  setMovies([]);
  //Call the API
  fetchAPI(searchField).then((moviesList) =>
    //then for each movie, only push the needed data to the movies state
    moviesList.map((movie) => {
      setMovies([
        ...movies,
        {
          poster: movie.poster_path,
          title: movie.title,
          rating: movie.vote_average,
          // TODO genre
          date: movie.release_date,
        },
      ]);
      return null;
    })
  );
};

export default handleMovieState;
