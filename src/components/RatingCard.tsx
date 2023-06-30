import { FaTrash, FaStar } from "react-icons/fa";
import Card from "./shared/Card";
import { Rating } from "../types/schema";

interface RatingCardProps {
  Rating: Rating;
  deleteItem: (id: number) => void;
}
function RatingCard({ Rating, deleteItem }: RatingCardProps) {
  return (
    <Card cool={true}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 6px",
        }}
      >
        <h1>
          <span>
            <FaStar color="orange" />
          </span>
          {" " + Rating.rating}
        </h1>
        <button onClick={() => deleteItem(Rating.id)}>
          <FaTrash />
        </button>
      </div>
      <p>{Rating.text}</p>
    </Card>
  );
}

export default RatingCard;
