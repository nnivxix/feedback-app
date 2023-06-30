import { useState } from "react";
import dataRatings from "./data/ratings";
import martabak from "./assets/product.jpg";
import Header from "./components/Header";
import RatingList from "./components/RatingList";
import Summary from "./components/Summary";

function App() {
  const [rating, setRating] = useState(dataRatings);
  const deleteRating = (id: number) => {
    // if (window.confirm("Are you sure you want to delete?")) {
    // }
    setRating(rating.filter((item) => item.id !== id));
  };
  return (
    <main>
      <Header title="Feedback App" version={1.2} />
      <img className="foto-product" src={martabak} alt="martabak" />
      <Summary reviews={rating} />
      <RatingList rating={rating} handleDelete={deleteRating} />
    </main>
  );
}

export default App;
