import React, { useState } from "react";
import Button from "./shared/Button";

function ReviewForm({ product }: { product: string }) {
  const [review, setReview] = useState("");
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

  return (
    <div>
      <h1>How about your experience with the {product}</h1>
      <form className="form-container">
        <div className="wrap-form">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            onChange={handleTextChange}
            id="review"
          ></textarea>
        </div>
        <div className="wrap-form">
          <label htmlFor="rate">Rate</label>
          <select id="rate">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5" selected>
              5
            </option>
          </select>
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
