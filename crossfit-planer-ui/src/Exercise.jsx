import React, { useEffect, useState } from "react";
import "./exercise.css";

const Exercise = ({ title, description, image, value, type, onDoubleClick, completed}) => {
  const [timerId, setTimerId] = useState(undefined);
  const [elapsed, setElapsed] = useState(5);


  function tick() {
    console.log(elapsed);
    if(elapsed === 0) {
      return clearInterval(timerId)
    }
    let currentElapsed = elapsed-1;
    setElapsed(currentElapsed);
    console.log("Timer is running...", currentElapsed) 
  }

  function startTimer() {
   let currentTimerId = setInterval(tick, 1000);
   setTimerId(currentTimerId);
   console.log("timer started")
  }
  
  useEffect(() => {
    return () =>{
      clearInterval(timerId)
      setTimerId(undefined);
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
