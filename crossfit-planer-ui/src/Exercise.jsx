import React, { useEffect, useState, useRef } from "react";
import "./exercise.css";

const Exercise = ({ title, description, image, value, type, onDoubleClick, completed}) => {
  const refTimerId = useRef(null);
  const elapsed = useRef(5)


  function tick() {
    
    if(elapsed.current === 0) {
      console.log("Clear interval")
      return clearInterval(refTimerId.current)
    }
    console.log("ELAPSED...", elapsed);
    let currentElapsed = elapsed.current-1;
    elapsed.current = currentElapsed
    console.log("Timer is running...", currentElapsed) 
  }

  function startTimer() {
   let currentTimerId = setInterval(tick, 1000);
   refTimerId.current = currentTimerId;
   console.log("timer started")
  }
  
  useEffect(() => {
    return () =>{
      clearInterval(refTimerId.current)
      refTimerId.current = null;
    }
  },[])
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
      <button onClick={startTimer}>START</button>
    </div>
  );
};

export default Exercise;
