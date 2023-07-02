import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {reviews.map((review: Review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delayChildren: 2,
                staggerDirection: -1,
              },
            }}
            exit={{ opacity: 0 }}
          >
            <ReviewCard
              key={review.id}
              Review={review}
              deleteReview={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
