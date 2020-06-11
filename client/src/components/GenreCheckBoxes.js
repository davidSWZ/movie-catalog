import React from "react";

/**
 * @param handleGenreCheckboxChange set movie genres state. 
 * If box checked: add genre to state, if unchecked: delete it
 * @param genres all genres of movies from API
 * @param movieGenres genres of the movie
 */
const GenreCheckBoxes = ({
  genres,
  handleGenreCheckboxChange,
  movieGenres,
}) => {
  const checkBoxes = [];
  for (const genre of genres) {
    const checked = movieGenres.includes(genre.name); //boolean : check if box was checked before any action
    checkBoxes.push(
      
      <div key={genre._id}>
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          name="genre"
          value={genre.name}
          onChange={(e) => {
            console.log(e);
            handleGenreCheckboxChange(genre.name, checked);
          }}
        />
        <label className="details-info" htmlFor={genre.name}>
          {genre.name}
        </label>
      </div>
      
    );
  }
  return (
    <div>
      <label htmlFor="release_date" className="details-info">
        Genres
      </label>

      {/* All checkboxes */}
      <div>
        <div className="checkbox-container">{checkBoxes}</div>
      </div>
    </div>         
  );
};

export default GenreCheckBoxes;
