import { createContext, useState, ReactNode } from "react";

const ReviewContext = createContext({});

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [review, setReview] = useState([
    {
      id: 1,
      text: "this is from provider",
      rating: 5,
    },
  ]);
  return (
    <ReviewContext.Provider value={{ review }}>
      {children}
    </ReviewContext.Provider>
  );
};
