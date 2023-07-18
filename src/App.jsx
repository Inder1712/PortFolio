import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <div className="absolute bg-gray-900 text-white">
        <div className="sticky top-0 z-40">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
