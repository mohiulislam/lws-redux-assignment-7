import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import EditJobForm from "./components/EditJobForm";
import EditJob from "./pages/EditJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddJob" element={<AddJob />} />
        <Route path="/EditJob" element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
