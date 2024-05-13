import React from "react";
import "./exercise.css";

const Exercise = ({ title, description, image, value, type }) => {
  return (
    <div className="exercise">
      <div>
        <img src={image}></img>
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{value}</div>
      <div>{type}</div>
    </div>
  );
};

export default Exercise;
