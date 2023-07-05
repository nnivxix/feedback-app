import React, { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import FormRating from "./InputRating";
import ReviewContext from "../context/ReviewContext";
import { Review } from "../types/schema";

function ReviewForm() {
  const { reviews, addReview, reviewEdit, updateReview } =
    useContext(ReviewContext);
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
      const newReview: { id?: number; text: string; rating: number } = {
        text: review,
        rating,
      };
      if (reviewEdit.isEdit) {
        updateReview({
          id: reviewEdit.review?.id as number,
          review: newReview,
        });
        setReview("");

        return;
      }
      newReview.id = (reviews.length + 1) as number;
      addReview(newReview as Review);
      setReview("");
    }
  };

  useEffect(() => {
    if (reviewEdit.isEdit) {
      setRating(reviewEdit.review?.rating as number);
      setReview(reviewEdit.review?.text as string);
      setBtnDisabled(false);
    }
  }, [reviewEdit]);

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
