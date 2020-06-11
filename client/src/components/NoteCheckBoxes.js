import React from "react";

/**
 * Create checkboxes to vote for a movie
 * @param values list of values to set checkboxes 
 * @param note note of movie that we are editing
 * @param handleChange set note state with value of checked box
 */
const NoteCheckBoxes = ({ values, note, handleChange }) => {
  const checkBoxes = [];
  for (const value of values) {
    checkBoxes.push(
      <div key={value} className="checkbox-item">
        <input
          className="checkbox"
          type="radio"
          id={value}
          name="note"
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={note.toString() === value.toString()}
        />
        <label className="details-info" htmlFor={value}>
          {value}
        </label>
      </div>
    );
  }
  return (
    <div>
      <label className="details-info">Vote</label>
      <div className="checkbox-container">{checkBoxes}</div>
    </div>
  )
};

export default NoteCheckBoxes;
