import { useState } from "react";

interface FormRatingProps {
  select: (id: number) => void;
}

function FormRating({ select }: FormRatingProps) {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(selected);
  };

  return (
    <div className="input-radio">
      {Array.from(Array(5).keys()).map((id) => (
        <div className="container-rating" key={id}>
          <input
            onChange={handleChange}
            type="radio"
            name="rating"
            id={`id-${id + 1}`}
            value={id + 1}
            checked={selected === id + 1}
          />
          <label htmlFor={`id-${id + 1}`}>{id + 1}</label>
        </div>
      ))}
    </div>
  );
}

export default FormRating;
