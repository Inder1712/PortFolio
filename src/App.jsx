import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  // State to store the current route
  const [currentRoute, setCurrentRoute] = useState("/");

  // Use useEffect to update the current route in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentRoute", currentRoute);
  }, [currentRoute]);

  // Use useEffect to get the initial route from localStorage when the app starts
  useEffect(() => {
    const initialRoute = localStorage.getItem("currentRoute");
    if (initialRoute) {
      setCurrentRoute(initialRoute);
    }
  }, []);

  return (
    <Router>
      <div className="absolute bg-gray-900 text-white">
        <div className="sticky top-0 z-40">
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={<Home setCurrentRoute={setCurrentRoute} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
