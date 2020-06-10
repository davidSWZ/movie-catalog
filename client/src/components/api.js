/**
 * @param url API url
 * @param method CRUD method
 * @param item parameter to fetch in API (query or params)
 */

const fetchData = async (url, method, item) => {
  const request = url + item; //Compose URL request
  let fetchedData = await fetch(request, {
    method: method,
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

const addMovie = async (url, movie) => {
  let fetchedData = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
};

export default { fetchData, addMovie };
