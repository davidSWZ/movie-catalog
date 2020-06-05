import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

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
      <Scroll>
        <p>Hello World</p>
      </Scroll>
    </div>
  );
}

export default App;
