import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";

function App() {
  //Global states definitions
  const [searchField, setSearchField] = useState(""); //hook to handle the SearchBox
  const [movies, setMovies] = useState([
    {
      poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/26/18686482.jpg",
      title: "Back to the futur",
    },
    {
      poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/26/18686482.jpg",
      title: "Back to the futur",
    },
  ]); //hook to handle the movies list

  return (
    <div className="container">
      <h1>Movie Kata.log</h1>
      <SearchBox
        fetchAPI={() => console.log("fetchAPI with: " + searchField)}
        setSearchField={setSearchField}
      />
      <Scroll>
        <CardList movies={movies} />
      </Scroll>
    </div>
  );
}

export default App;
