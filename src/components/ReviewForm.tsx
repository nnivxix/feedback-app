import React, { useState } from "react";

function ReviewForm({ product }: { product: string }) {
  const [review, setReview] = useState("");
  const handleTextChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
