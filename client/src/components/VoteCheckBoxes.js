import React from "react";

const VoteCheckBoxes = ({ elements, vote_average, handleChange }) => {
  const checkBoxes = [];
  for (const element of elements) {
    checkBoxes.push(
      <div key={element} className="checkbox-item">
        <input
          className="checkbox"
          type="radio"
          id={element}
          name="vote_average"
          value={element}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={vote_average.toString() === element.toString()}
        />
        <label className="details-info" htmlFor={element}>
          {element}
        </label>
      </div>
    );
  }
  return <div className="checkbox-container">{checkBoxes}</div>;
};

export default VoteCheckBoxes;
