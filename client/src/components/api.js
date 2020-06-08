/**
 * @param url API url
 * @param parameter parameter to search in API (query or params)
 */
const fetchAPI = async (url, parameter) => {
  const request = url + parameter; //Compose URL request
  let fetchedData = await fetch(request); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

export default fetchAPI;

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

/**
 * Request to the TMDB API
 * Used at the beginning of the project
 */
// const getGenres = async () => {
//   //Build request URL
//   const genreURL =
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//     process.env.REACT_APP_API_KEY;

//   let fetchedData = await fetch(genreURL); //Make the request
//   let response = await fetchedData.json(); //Parse the result from the API
//   return response.genres;
// };