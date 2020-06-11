import React, { Component } from "react";

/**
 * @return an simple input (text, date ...)
 * @param attribute  movie state attribute handled with this input 
 * @param type type of input
 * @param value value of this attribute in the movie  
 * @param placeHolder placeholder
 * @param handleChange set attribute on state with value
 */
const SimpleInput = ({ attribute, type, value, placeHolder, handleChange }) => {
  return (
    <div>
        <div>
          <label htmlFor={attribute} className="details-info">
            {attribute}
          </label>
        </div>
        <input
          type={type}
          id={attribute}
          name={attribute}
          value={value}
          className="add-form-input"
          placeholder={placeHolder}
          onChange={(e) => handleChange(e)}
        />
    </div>
  )
}

export default SimpleInput;
