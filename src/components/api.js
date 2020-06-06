//Call the TheMovieDB API, pass the API key and the searchfield parameter, and return the list of movies
//matching the parameter

const fetchAPI = async (searchField) => {
  //Compose the URL for the request
  const request =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&query=" +
    searchField;

  let fetchedData = await fetch(request); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response.results; // return only the movies array from the response
};

export default fetchAPI;
