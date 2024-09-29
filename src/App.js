import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MusicLegends from "./components/MusicLegends";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("Toggle theme clicked"); // Debug log
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme; // Set the body class to the current theme
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <section id="legends" className="mt-5">
        <MusicLegends />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
