/**
 * @param searchField parameter from searchBox
 */
const getMovies = async (searchField) => {
  //Compose URL request
  const moviesRequest =
    "http://localhost:8000/api/movies?search=" +
    searchField;
  let fetchedData = await fetch(moviesRequest); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

const getGenres = async () => {
  //Build request URL
  const genreURL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_API_KEY;

  let fetchedData = await fetch(genreURL); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response.genres;
};

export default { getMovies, getGenres };

/**
 * Request to the TMDB API
 * Used at the beginning of the project
 */
// const getMovies = async (searchField) => {
//   //Compose URL request
//   const moviesRequest =
//     "https://api.themoviedb.org/3/search/movie?api_key=" +
//     process.env.REACT_APP_API_KEY +
//     "&query=" +
//     searchField;

//   let fetchedData = await fetch(moviesRequest); //Make the request
//   let response = await fetchedData.json(); //Parse the result from the API
//   return response.results;
// };