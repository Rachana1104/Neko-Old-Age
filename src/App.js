import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Relative from "./Interfaces/Relative/Relative";
import NotFound from "./components/NotFound";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/relative" element={<Relative />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
