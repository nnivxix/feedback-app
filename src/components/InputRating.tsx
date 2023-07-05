import { useState, useEffect, useContext } from "react";
import ReviewContext from "../context/ReviewContext";

interface FormRatingProps {
  select: (id: number) => void;
}

function FormRating({ select }: FormRatingProps) {
  const [selected, setSelected] = useState(5);
  const { reviewEdit } = useContext(ReviewContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  useEffect(() => {
    setSelected(reviewEdit.review?.rating as number);
  }, [reviewEdit]);

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
