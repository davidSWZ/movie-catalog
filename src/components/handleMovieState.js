import fetchApiMovies from "./api";

//Take the response from the API and for each movie, keep only :
//title, poster, ratings, genre and release date
const handleMovieState = (handleMovies, searchField) => {
  //create variable to compile only the needed informations from the film
  let newMovieList = [];

  //Compose the URL for the movies request
  const moviesRequest =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&query=" +
    searchField;

  //Call the API
  fetchApiMovies(searchField, moviesRequest).then((moviesList) => {
    if (!moviesList) return;
    //then for each movie, only push the needed data to the newMovieList
    moviesList.map((movie) => {
      newMovieList.push({
        id: movie.id,
        poster: movie.poster_path,
        title: movie.title,
        rating: movie.vote_average,
        genre: movie.genre_ids,
        date: movie.release_date,
      });
      return null;
    });
    handleMovies(newMovieList);
  });
};

export default handleMovieState;
