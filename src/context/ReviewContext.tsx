import { createContext, useState, ReactNode } from "react";
import { Review } from "../types/schema";
import dataReviews from "../data/reviews";

const ReviewContext = createContext<Review[]>([]);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews] = useState(dataReviews);
  return (
    <ReviewContext.Provider value={reviews}>{children}</ReviewContext.Provider>
  );
};

export default ReviewContext;
