//Call the TheMovieDB API, pass the API key and the searchfield parameter, and return the list of movies
//matching the parameter

const fetchAPI = async (searchField, request) => {
  let fetchedData = await fetch(request); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response.results; // return only the movies array from the response
};

export default fetchAPI;
