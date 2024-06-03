import React, { useState } from 'react';
import "./trainingNavigation.css";

const TrainingNavigation = () => {
    const textPause = "PAUSE TRAINING"
    const textContinue = "CONTINUE TRAINING"
    const textStart = "START TRAINING"
    const [startButton, setStartButton] = useState(textStart);

    function startTraining() {
        setStartButton(textPause)

        if(startButton === textPause) {
            continueTraining();
        }
    }
    function continueTraining() {
        setStartButton(textContinue)
    }
    function stopTraining() {
        setStartButton(textStart)
    }
  return (
    <div className='training-navigation'>
        <button onClick={startTraining}>{startButton}</button>
        <button onClick={stopTraining}>STOP TRAINING</button>
    </div>
  )
}

export default TrainingNavigation;
