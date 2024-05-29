import React, { useEffect, useState, useRef } from "react";
import "./exercise.css";

const Exercise = ({ title, description, image, value, type, onDoubleClick, completed}) => {
  const refTimerId = useRef(null);
  const elapsed = useRef(value)
  const [elapsedTimer, setElapsedTimer] = useState(value);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function tick() {
    
    if(elapsed.current === 0) {
      console.log("Clear interval")
      return clearInterval(refTimerId.current)
    }
    console.log("ELAPSED...", elapsed);
    let currentElapsed = elapsed.current-1;
    elapsed.current = currentElapsed
    console.log("Timer is running...",elapsed.current) 
    setElapsedTimer(elapsed.current)
  }

  function startTimer() {
   setIsTimerRunning(true) 
   let currentTimerId = setInterval(tick, 1000);
   refTimerId.current = currentTimerId;
   console.log("timer started")
   
  }
  
  function stopTimer() {
    clearInterval(refTimerId.current);
    setIsTimerRunning(false);
  }

  useEffect(() => {
    return () =>{
      clearInterval(refTimerId.current)
      refTimerId.current = null;
    }
  },[])


  let color = completed === true ? "green" : isTimerRunning ? "aqua" : "default"

  let className = `exercise ${color}`;


  return (
    <div className={className} onDoubleClick={onDoubleClick}>
      <div>
        <img src={image}></img>
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{elapsedTimer}</div>
      <div>{type}</div>
      <div>{completed === true ? "✓" : "X"}</div>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  );
};

export default Exercise;
