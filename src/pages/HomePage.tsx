import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import martabak from "../assets/product.jpg";
import ReviewList from "../components/ReviewList";
import Summary from "../components/Summary";
import ReviewForm from "../components/ReviewForm";
import dataReviews from "../data/reviews";
import { Review } from "../types/schema";

function HomePage() {
  const [reviews, setReview] = useState(dataReviews);

  const deleteReview = (id: number) => {
    setReview(reviews.filter((review) => review.id !== id));
  };
  const addReview = (newReview: Review) => {
    setReview([newReview, ...reviews]);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img className="foto-product" src={martabak} alt="martabak" />
      <ReviewForm
        id={reviews.length + 1}
        product="Spesial Martabak Telor"
        handleAdd={addReview}
      />
      <Summary />
      <ReviewList handleDelete={deleteReview} />
      <Link to={"/about"} className="about-link">
        <FaQuestion size={20} />
      </Link>
    </div>
  );
}

export default HomePage;
