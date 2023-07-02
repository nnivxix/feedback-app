import React, { useState } from "react";
import Button from "./shared/Button";
import FormRating from "./FormRating";

function ReviewForm({ product }: { product: string }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (review === "") {
      setBtnDisabled(true);
      setErrorMessage("");
    } else if (review !== "" && review.trim().length <= 10) {
      setErrorMessage("you have to enter at least 10 characters");
      setBtnDisabled(true);
    } else {
      setErrorMessage("");
      setBtnDisabled(false);
    }
    setReview(e.target.value);
  };
  const selectRating = (e) => {
    setRating(e.target.value);
    // console.log(rating);
  };

  // console.log(rating);

  return (
    <div>
      <h1>How about your experience with the {product}</h1>
      <form className="form-container">
        <p>Please rate our restaurant</p>
        <div className="container-rating">
          {Array.from(Array(5).keys()).map((id) => (
            <FormRating key={id} id={id} handleChange={selectRating} />
          ))}
        </div>
        <div className="wrap-form">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            onChange={handleTextChange}
            id="review"
          ></textarea>
        </div>
        <Button type="button" isDisabled={btnDisabled}>
          Submit
        </Button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage} </div>}
    </div>
  );
}

export default ReviewForm;
