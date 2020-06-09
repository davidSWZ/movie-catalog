/**
 * @param url API url
 * @param method CRUD method
 * @param item parameter to fetch in API (query or params)
 */

const fetchAPI = async (url, method, item) => {
  const request = url + item; //Compose URL request
  let fetchedData = await fetch(request, {
    method: method
  }); //Make the request
  let response = await fetchedData.json(); //Parse the result from the API
  return response;
}


export default fetchAPI;