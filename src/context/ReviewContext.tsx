import { createContext, useState, ReactNode } from "react";
import { Review } from "../types/schema";
import dataReviews from "../data/reviews";

interface ReviewContextProps {
  reviews: Review[];
  deleteReview: (id: number) => void;
  addReview: (review: Review) => void;
  updateReview: (review: Review) => void;
}

interface EditReviewProps {
  review?: Review;
  isEdit: boolean;
}

const ReviewContext = createContext<ReviewContextProps>({
  reviews: [],
  deleteReview: () => null,
  addReview: () => null,
  updateReview: () => null,
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReview] = useState<Review[]>(dataReviews);
  const [editReview, setEditReview] = useState<EditReviewProps>({
    review: {
      id: 0,
      text: "",
      rating: 0,
    },
    isEdit: false,
  });

  const deleteReview = (id: number) => {
    setReview(reviews.filter((review) => review.id !== id));
  };
  const addReview = (review: Review) => {
    setReview([review, ...reviews]);
  };
  const updateReview = (review: Review) => {
    setEditReview({
      review,
      isEdit: true,
    });
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, deleteReview, addReview, updateReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
