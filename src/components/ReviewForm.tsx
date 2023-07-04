import React, { useState, useContext } from "react";
import Button from "./shared/Button";
import FormRating from "./InputRating";
import ReviewContext from "../context/ReviewContext";

function ReviewForm() {
  const { reviews, addReview } = useContext(ReviewContext);
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

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      const newReview = {
        id: reviews.length + 1,
        text: review,
        rating,
      };
      addReview(newReview);
      setReview("");
      setRating(5);
    }
  };

  return (
    <div>
      <h1>How about your experience with our restaurant</h1>
      <form className="form-container" onSubmit={submitForm}>
        <p>Please rate our restaurant</p>
        <FormRating select={(rating) => setRating(rating)} />
        <div className="wrap-form">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            onChange={handleTextChange}
            id="review"
            value={review}
          ></textarea>
        </div>
        <Button type="submit" isDisabled={btnDisabled}>
          Submit
        </Button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage} </div>}
    </div>
  );
}

export default ReviewForm;
