import React from "react";

/**
 * @param handleGenreCheckboxChange function that passes selected genres to parent component
 * @param genres genres of movies
 */
const GenreCheckBoxes = ({
  genres,
  handleGenreCheckboxChange,
  movieGenres,
}) => {
  const checkBoxes = [];
  console.log(genres);
  console.log(movieGenres);
  for (const genre of genres) {
    const isChecked = movieGenres.includes(genre.name);
    checkBoxes.push(
      <div key={genre._id}>
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          name="genre"
          value={genre.name}
          onChange={(e) => {
            console.log(e);
            handleGenreCheckboxChange(genre.name, isChecked);
          }}
        />
        <label className="details-info" htmlFor={genre.name}>
          {genre.name}
        </label>
      </div>
    );
  }
  return <div className="checkbox-container">{checkBoxes}</div>;
};

export default GenreCheckBoxes;
