import { FaTrash, FaStar } from "react-icons/fa";
import Card from "../shared/Card";
// import { Rating } from "../types/schema";

interface RatingCardProps {
  id: number;
  rating: number;
  text: string;
  deleteItem: (id: number) => void;
}
function RatingCard({ id, rating, text, deleteItem }: RatingCardProps) {
  return (
    <Card cool={false}>
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
          {" " + rating}
        </h1>
        <button onClick={() => deleteItem(id)}>
          <FaTrash />
        </button>
      </div>
      <p>{text}</p>
    </Card>
  );
}

export default RatingCard;
