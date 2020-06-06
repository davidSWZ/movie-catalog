import fetchAPI from "./api";

//Take the response from the API and for each movie, keep only :
//title, poster, ratings, genre and release date
const handleMovieState = (setMovies, searchField) => {
  //reinitiate the movie state to start a new search
  setMovies([]);

  //Call the API
  fetchAPI(searchField).then((movies) =>
    //then for each movie, only push the needed data to the movies state
    movies.map((movie) => {
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
