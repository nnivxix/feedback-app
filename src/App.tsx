import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import { ReviewProvider } from "./context/ReviewContext";
function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header title="Feedback App" version={1.2} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/post/*" element={<PostPage />}></Route>
        </Routes>
      </Router>
    </ReviewProvider>
  );
}

export default App;
