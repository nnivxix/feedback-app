import RatingCard from "./RatingCard";
import { Rating } from "../types/schema";

interface RatingListProps {
  rating: Rating[];
  handleDelete: (id: number) => void;
}

function RatingList({ rating, handleDelete }: RatingListProps) {
  if (!rating.length) {
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
