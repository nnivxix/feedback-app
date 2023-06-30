import { Rating } from "../types/schema";

function RatingCard(props: Rating) {
  const { rating, text, id } = props;

  return (
    <div key={id} className="rating-card">
      <h1>{rating}</h1>
      <p>{text}</p>
    </div>
  );
}

export default RatingCard;
