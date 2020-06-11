/**
 * search movies, or genres in API
 * @param url API url
 * @param id id to fetch in API
 */
const getData = async (url, id) => {
  const request = url + id; 
  let fetchedData = await fetch(request); //Make the request
  let response = await fetchedData.json(); //Parse the result
  return response;
};

const getOneMovie = async ( id ) => {
  const request = "http://localhost:8000/api/movies/" + id; 
  let fetchedData = await fetch(request); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  // handle the date format to only keep dd/mm/yyyy format
  response[0].release_date = response[0].release_date.split("T")[0]; 
  return response[0];
}

const addMovie = async (movie) => {
  let fetchedData = await fetch("http://localhost:8000/api/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

const updateMovie = async (id, movie) => {
  const request = "http://localhost:8000/api/movies/" + id;
  let fetchedData = await fetch(request, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

const deleteMovie = async (id) => {
  const request = "http://localhost:8000/api/movies/" + id;
  let fetchedData = await fetch(request, {
    method: "delete",
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

export default { getData, getOneMovie, addMovie, updateMovie, deleteMovie };
