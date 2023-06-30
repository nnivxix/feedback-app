import { useState } from "react";

function RatingCard() {
  const [rating, setRating] = useState(8);
  const [review, setReview] = useState("Nice");

  return (
    <div className="rating-card">
      <h1>{rating}</h1>
      <p>{review}</p>
    </div>
  );
}

export default RatingCard;
