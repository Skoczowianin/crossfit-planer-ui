import { Link } from "react-router-dom";
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Link to="/template">
        <span>Training</span>
      </Link>
      <Link to="/exercise">
        <span>Exercise</span>
      </Link>
      <h1>Crossfit Planer UI</h1>
    </div>
  );
};

export default HomePage;
