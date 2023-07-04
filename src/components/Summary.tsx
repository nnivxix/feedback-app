import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import ReviewContext from "../context/ReviewContext";

function Summary() {
  const { reviews } = useContext(ReviewContext);
  const average =
    reviews.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / reviews.length;
  return (
    <div className="summary">
      <p>
        Total {reviews.length > 1 ? "reviews" : "review"} ({reviews.length})
      </p>
      <p>
        Rating average{" "}
        <span>
          <FaStar />
        </span>{" "}
        {isNaN(average) ? 0 : average.toFixed(1)}/5
      </p>
    </div>
  );
}

export default Summary;
