import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { Review } from "../types/schema";
import ReviewContext from "../context/ReviewContext";

function ReviewList() {
  const { reviews, deleteReview, updateReview } = useContext(ReviewContext);
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
              deleteReview={deleteReview}
              updateReview={updateReview}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
