import React from "react";

//Return the search input component
function SearchBox({ searchField, setSearchField }) {
  //Call the TheMovieDB API, pass the API key and the searchfield parameter, and return the list of movies
  //matching the parameter
  const fetchAPI = () => {
    //Compose the URL for the request
    const request =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&query=" +
      searchField;

    fetch(request) //Make the request
      .then((res) => res.json()) //JSON parser
      .then((data) => {
        return data.results; //Return an array
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search a movie"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button
        onClick={() => {
          fetchAPI();
        }}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBox;
