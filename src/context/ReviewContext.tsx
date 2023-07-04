import { createContext, useState, ReactNode } from "react";
import { Review } from "../types/schema";
import dataReviews from "../data/reviews";

interface ReviewContextProps {
  reviews: Review[];
  deleteReview: (id: number) => void;
  addReview: (review: Review) => void;
}

const ReviewContext = createContext<ReviewContextProps>({
  reviews: [],
  deleteReview: () => null,
  addReview: () => null,
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReview] = useState<Review[]>(dataReviews);
  const deleteReview = (id: number) => {
    setReview(reviews.filter((review) => review.id !== id));
  };
  const addReview = (review: Review) => {
    setReview([review, ...reviews]);
  };
  return (
    <ReviewContext.Provider value={{ reviews, deleteReview, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
