import Header from "./components/Header";
import RatingList from "./components/RatingList";

function App() {
  return (
    <main>
      <Header title="Feedback App" version={1.2} />
      <RatingList />
    </main>
  );
}

export default App;
