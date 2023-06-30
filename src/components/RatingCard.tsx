import { Rating } from "../types/schema";
import star from "../assets/star.svg";
import Card from "../shared/Card";

function RatingCard(props: Rating) {
  const { rating, text } = props;

  return (
    <Card cool={false}>
      <h1>
        <span>
          <img width={32} src={star} alt="rating star" />
        </span>
        {" " + rating}
      </h1>
      <p>{text}</p>
    </Card>
  );
}

export default RatingCard;
