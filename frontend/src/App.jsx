import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Predict from "./components/Predict";
import History from "./components/History";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <Router>
  <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
