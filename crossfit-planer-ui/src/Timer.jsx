import React, { useState } from 'react'

const Timer = ({timerStart}) => {
    const [intervalNumber, setIntervalNumber] = useState("");
  return (
    <div>
       <button onClick={timerStart}>START</button>
    </div>
  )
}

export default Timer