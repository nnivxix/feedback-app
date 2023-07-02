import React from "react";

interface FormRatingProps {
  id: number;
  handleChange: (id: number) => void;
}

function FormRating({ id, handleChange }: FormRatingProps) {
  return (
    <div className="input-radio">
      <input
        onChange={handleChange}
        type="radio"
        name="rating"
        id={`id-${id + 1}`}
        value={id + 1}
      />
      <label htmlFor={`id-${id + 1}`}>{id + 1}</label>
    </div>
  );
}

export default FormRating;
