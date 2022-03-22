import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginSignup/Admin/LoginPage";
import SignupPage from "./pages/LoginSignup/Admin/SignupPage";
import LoginPage1 from "./pages/LoginSignup/Relative/LoginPage";
import SignupPage1 from "./pages/LoginSignup/Relative/SignupPage";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Relative from "./Interfaces/Relative/Relative";
import NotFound from "./components/NotFound";
import HomePage from "./Pages/HomePage/HomePage";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Router>
      <Routes>

      <Route exact path="/admin/login" element={<LoginPage />} />
      <Route exact path="/admin/signup" element={<SignupPage />} />
      <Route exact path="/relative/signup" element={<SignupPage1 />} />
      <Route exact path="/relative/login" element={<LoginPage1 />} />
      <Route exact path="/" element={<HomePage />} />
          <Route exact path="/relative" element={<Relative />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
