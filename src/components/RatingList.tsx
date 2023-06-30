import { useState } from "react";
import ratings from "../data/ratings";
import RatingCard from "./RatingCard";

function RatingList() {
  const [rating] = useState(ratings);
  if (!rating.length) {
    return <p style={{ textAlign: "center" }}>No rating yet!</p>;
  }
  return (
    <div>
      {rating.map((r: { id: number; text: string; rating: number }) => (
        <RatingCard id={r.id} text={r.text} rating={r.rating} />
      ))}
    </div>
  );
}

export default RatingList;
