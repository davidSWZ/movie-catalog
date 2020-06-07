import fetchApi from "./api";
import GenreVSGenreId from "./GenreVSGenreId";

//Take the response from the API and for each movie, keep only :
//title, poster, ratings, genre and release date

function handleMovieState(handleMovies, searchField) {
  //create variable to compile only the needed informations from the film
  let newMovieList = [];

  //Call the API for the movies
  fetchApi.getMovies(searchField).then((moviesList) => {
    if (!moviesList) return;
    //then for each movie, only push the needed data to the newMovieList
    moviesList.map((movie) => {
      newMovieList.push({
        id: movie.id,
        poster: movie.poster_path,
        title: movie.title,
        rating: movie.vote_average,
        genre_ids: movie.genre_ids,
        date: movie.release_date,
      });
      return null;
    });
    handleMovies(newMovieList);
  });
}

export default handleMovieState;
