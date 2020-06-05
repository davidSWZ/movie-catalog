import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";

function App() {
  //Global states definitions
  const [searchField, setSearchField] = useState(""); //state to handle the SearchBox

  return (
    <div className="container">
      <h1>Movie Kata.log</h1>
      <SearchBox
        fetchAPI={() => console.log("fetchAPI with: " + searchField)}
        setSearchField={setSearchField}
      />
    </div>
  );
}

export default App;
