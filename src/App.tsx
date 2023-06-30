import Header from "./components/Header";
import RatingCard from "./components/RatingCard";

function App() {
  return (
    <main>
      <Header title="Feedback App" version={1.2} />
      <RatingCard />
    </main>
  );
}

export default App;
