import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginSignup/Admin/LoginPage";
import SignupPage from "./Pages/LoginSignup/Admin/SignupPage";
import LoginPage1 from "./Pages/LoginSignup/Relative/LoginPage";
import SignupPage1 from "./Pages/LoginSignup/Relative/SignupPage";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import "./App.css";
import Relative from "./Interfaces/Relative/Relative";
import NotFound from "./components/NotFound";
import HomePage from "./Pages/HomePage/HomePage";
import Create from "./Interfaces/Admin/Create";
import View from "./Interfaces/Admin/View";
import Edit from "./Interfaces/Admin/Edit";
import PatientDetails from "./Interfaces/Admin/PatientDetails";
import Enrolled from "./Interfaces/Admin/Enrolled";

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
      <Route exact path="/create" element={<Create />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/edit/:name/:id" element={<Edit />} />
        <Route
          exact
          path="/view/:name/:id"
          element={<PatientDetails/>}
        />
        <Route exact path="/enrolled" element={<Enrolled />} />
        <Route exact path="/relative" element={<Relative />} />
      <Route exact path="/relative" element={<Relative />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
