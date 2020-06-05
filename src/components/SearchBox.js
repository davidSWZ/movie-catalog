import React from "react";

//Return the search input component
function SearchBox({ fetchAPI, setSearchField }) {
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
