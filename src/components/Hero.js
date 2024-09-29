import React from "react";
import "./Hero.css"; // Add custom CSS for the hero section

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Music Legends</h1>
        <p>
          Explore the lives and legacies of music legends who changed the world.
        </p>
        <a href="#legends" className="btn btn-primary">
          Explore Legends
        </a>
      </div>
    </section>
  );
};

export default Hero;
