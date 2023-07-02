import React, { useState } from "react";
import Button from "./shared/Button";
import FormRating from "./InputRating";
import { Review } from "../types/schema";

interface ReviewFormProps {
  product: string;
  id: number;
  handleAdd: (review: Review) => void;
}
function ReviewForm({ product, id, handleAdd }: ReviewFormProps) {
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
        id: id,
        text: review,
        rating,
      };
      handleAdd(newReview);
    }
  };

  return (
    <div>
      <h1>How about your experience with the {product}</h1>
      <form className="form-container" onSubmit={submitForm}>
        <p>Please rate our restaurant</p>
        <FormRating select={(rating) => setRating(rating)} />
        <div className="wrap-form">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            onChange={handleTextChange}
            id="review"
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
