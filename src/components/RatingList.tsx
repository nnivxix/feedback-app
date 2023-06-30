import { Rating } from "../types/schema";
import RatingCard from "./RatingCard";

function RatingList({ rating, handleDelete }) {
  // const { id, text, rating, deleteItem } = props;
  if (!(rating as Rating[]).length) {
    return <p style={{ textAlign: "center" }}>No rating yet!</p>;
  }
  return (
    <div>
      {rating.map((r: Rating) => (
        <RatingCard
          key={r.id}
          rating={r.rating}
          text={r.text}
          id={r.id}
          deleteItem={handleDelete}
        />
      ))}
    </div>
  );
}

export default RatingList;
