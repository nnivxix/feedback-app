import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Router>
        <Header title="Feedback App" version={1.2} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
