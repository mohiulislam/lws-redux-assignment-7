import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<AddJob />} />
        <Route path="/EditJob/:id" element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
