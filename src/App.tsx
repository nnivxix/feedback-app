import { useState } from "react";
import dataReviews from "./data/reviews";
import martabak from "./assets/product.jpg";
import { Review } from "./types/schema";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import Summary from "./components/Summary";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [reviews, setReview] = useState(dataReviews);

  const deleteReview = (id: number) => {
    setReview(reviews.filter((review) => review.id !== id));
  };
  const addReview = (newReview: Review) => {
    setReview([newReview, ...reviews]);
  };

  return (
    <main>
      <Header title="Feedback App" version={1.2} />
      <img className="foto-product" src={martabak} alt="martabak" />
      <ReviewForm
        id={reviews.length + 1}
        product="Spesial Martabak Telor"
        handleAdd={addReview}
      />
      <Summary reviews={reviews} />
      <ReviewList reviews={reviews} handleDelete={deleteReview} />
    </main>
  );
}

export default App;
