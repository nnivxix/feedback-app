import { createContext, useState, ReactNode } from "react";
import { Review } from "../types/schema";
import dataReviews from "../data/reviews";

interface ReviewContextProps {
  reviews: Review[];
  reviewEdit: ReviewEditProps;
  deleteReview: (id: number) => void;
  addReview: (review: Review) => void;
  editReview: (review: Review) => void;
  updateReview: ({ id, review }: UpdateReviewProps) => void;
}

interface ReviewEditProps {
  review?: Review;
  isEdit: boolean;
}
interface UpdateReviewProps {
  id: number;
  review: { rating: number; text: string };
}

const ReviewContext = createContext<ReviewContextProps>({
  reviews: [],
  reviewEdit: {
    review: {
      id: 0,
      text: "",
      rating: 0,
    },
    isEdit: false,
  },
  deleteReview: () => null,
  addReview: () => null,
  editReview: () => null,
  updateReview: () => null,
});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReview] = useState<Review[]>(dataReviews);
  const [reviewEdit, setReviewEdit] = useState<ReviewEditProps>({
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
  const editReview = (review: Review) => {
    setReviewEdit({
      review,
      isEdit: true,
    });
  };
  const updateReview = ({ id, review }: UpdateReviewProps) => {
    setReview(
      reviews.map((item) => {
        return item.id === id ? { ...item, ...review } : item;
      })
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        reviewEdit,
        deleteReview,
        addReview,
        editReview,
        updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
