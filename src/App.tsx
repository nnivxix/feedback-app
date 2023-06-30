import { useState } from "react";
import dataRatings from "./data/ratings";
import Header from "./components/Header";
import RatingList from "./components/RatingList";

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
      <RatingList rating={rating} handleDelete={deleteRating} />
    </main>
  );
}

export default App;
