import { createContext, useState, useEffect, ReactNode } from "react";
import { Review } from "../types/schema";

interface ReviewContextProps {
  reviews: Review[];
  isLoading: boolean;
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
  isLoading: false,
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
  const [reviews, setReview] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviewEdit, setReviewEdit] = useState<ReviewEditProps>({
    review: {
      id: 0,
      text: "",
      rating: 0,
    },
    isEdit: false,
  });

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    const request = await fetch(import.meta.env.VITE_API_URL);
    const respons = await request.json();

    setReview(respons);
    setIsLoading(false);
  }

  async function deleteReview(id: number) {
    await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    setReview(reviews.filter((review) => review.id !== id));
  }
  async function addReview(review: Review) {
    const request = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const respons = await request.json();

    setReview([respons, ...reviews]);
  }
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
        isLoading,
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
