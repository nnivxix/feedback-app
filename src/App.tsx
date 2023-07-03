import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <main>
      <Router>
        <Header title="Feedback App" version={1.2} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/post/:title/:author" element={<PostPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
