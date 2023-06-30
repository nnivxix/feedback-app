import { FaTrash, FaStar } from "react-icons/fa";
import Card from "./shared/Card";
import { Review } from "../types/schema";

interface ReviewCardProps {
  Review: Review;
  deleteReview: (id: number) => void;
}
function ReviewCard({ Review, deleteReview }: ReviewCardProps) {
  return (
    <Card cool={false}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 6px",
        }}
      >
        <h1>
          <span>
            <FaStar color="orange" />
          </span>
          {" " + Review.rating}
        </h1>
        <button onClick={() => deleteReview(Review.id)}>
          <FaTrash />
        </button>
      </div>
      <p>{Review.text}</p>
    </Card>
  );
}

export default ReviewCard;
