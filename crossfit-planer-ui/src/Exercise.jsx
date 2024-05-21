import React from "react";
import "./exercise.css";

const Exercise = ({ title, description, image, value, type, onDoubleClick, completed}) => {
  return (
    <div className="exercise" onDoubleClick={onDoubleClick}>
      <div>
        <img src={image}></img>
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{value}</div>
      <div>{type}</div>
      <div>{completed === true ? "✓" : "X"}</div>
    </div>
  );
};

export default Exercise;
