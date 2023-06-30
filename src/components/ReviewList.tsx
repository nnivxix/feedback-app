import ReviewCard from "./ReviewCard";
import { Review } from "../types/schema";

interface ReviewListProps {
  reviews: Review[];
  handleDelete: (id: number) => void;
}

function ReviewList({ reviews, handleDelete }: ReviewListProps) {
  if (!reviews.length) {
    return <p style={{ textAlign: "center" }}>No rating yet!</p>;
  }
  return (
    <div>
      {reviews.map((review: Review) => (
        <ReviewCard
          key={review.id}
          Review={review}
          deleteReview={handleDelete}
        />
      ))}
    </div>
  );
}

export default ReviewList;
