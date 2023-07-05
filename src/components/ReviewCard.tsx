import { FaTrash, FaStar, FaPencilAlt } from "react-icons/fa";
import Card from "./shared/Card";
import { Review } from "../types/schema";

interface ReviewCardProps {
  Review: Review;
  deleteReview: (id: number) => void;
  editReview: (review: Review) => void;
}
function ReviewCard({ Review, deleteReview, editReview }: ReviewCardProps) {
  return (
    <Card cool={false}>
      <div className="card-container">
        <h1>
          <span>
            <FaStar color="orange" />
          </span>
          {" " + Review.rating}
        </h1>
        <div>
          <button
            className="button-action"
            onClick={() => deleteReview(Review.id)}
          >
            <FaTrash />
          </button>
          <button
            className="button-action"
            onClick={() => {
              editReview(Review);
              window.location.href = "#review";
            }}
          >
            <FaPencilAlt />
          </button>
        </div>
      </div>
      <p>{Review.text}</p>
    </Card>
  );
}

export default ReviewCard;
