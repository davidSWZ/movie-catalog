import React from "react";

const GenreCheckBoxes = ({ genres, handleGenresInput }) => {
  const checkBoxes = [];
  for (const genre of genres) {
    checkBoxes.push(
      <div key={genre._id}>
        <input
          className="checkbox"
          type="checkbox"
          id={genre._id}
          name="genre_ids"
          value={genre._id}
          onClick={(e) => handleGenresInput(e)}
        />
        <label className="details-info" htmlFor={genre._id}>
          {genre.name}
        </label>
      </div>
    );
  }
  return <div className="checkbox-container">{checkBoxes}</div>;
};

export default GenreCheckBoxes;
