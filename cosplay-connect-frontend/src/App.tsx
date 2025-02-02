import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProfile from "./pages/CreateProfilePage";
import TestLogin from "./components/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/test-login" element={<TestLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
