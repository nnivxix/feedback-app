import ReviewList from "../components/ReviewList";
import Summary from "../components/Summary";
import ReviewForm from "../components/ReviewForm";
import HeaderImage from "../components/HeaderImage";

function HomePage() {
  return (
    <main>
      <HeaderImage />
      <ReviewForm />
      <Summary />
      <ReviewList />
    </main>
  );
}

export default HomePage;
