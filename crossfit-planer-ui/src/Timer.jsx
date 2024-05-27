import React, { useState } from 'react'

const Timer = ({timerStart, timerStop}) => {
    const [isRunning, setIsRunning] = useState(false);

    function handleStart() {
        setIsRunning(true);
        timerStart();
    }
    function handleStop() {
        setIsRunning(false)
        timerStop();
    }
  return (
    <div>
       <button onClick={handleStart} disabled={isRunning}>START</button>
       <button onClick={handleStop} disabled={!isRunning}>STOP</button>
    </div>
  )
}

export default Timer;
