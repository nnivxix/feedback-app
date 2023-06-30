import { FaTrash, FaStar } from "react-icons/fa";
import Card from "../shared/Card";
import { Rating } from "../types/schema";

function RatingCard(props: Rating) {
  const { id, text, rating, deleteItem } = props;
  // console.log(rating);
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
