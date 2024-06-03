import React, { useState } from "react";
import "./trainingNavigation.css";

const TrainingNavigation = () => {
  const textPause = "PAUSE TRAINING";
  const textContinue = "CONTINUE TRAINING";
  const textStart = "START TRAINING";
  const trainingNotStarted = "NOT STARTED";
  const trainingInProgress = "IN PROGRESS";
  const trainignPaused = "PAUSED";
  const [startButton, setStartButton] = useState(textStart);
  const [trainingStatus, setTrainingStatus] = useState(trainingNotStarted);

  function startTraining() {
    setStartButton(textPause);
    setTrainingStatus(trainingInProgress);
    if (startButton === textPause) {
      continueTraining();
      setTrainingStatus(trainignPaused);
    }
  }
  function continueTraining() {
    setStartButton(textContinue);
  }
  function stopTraining() {
    setStartButton(textStart);
    setTrainingStatus(trainingNotStarted);
  }
  return (
    <div className="training-navigation">
      <div className="training-buttons">
        <button onClick={startTraining}>{startButton}</button>
        <button onClick={stopTraining}>STOP TRAINING</button>
      </div>
      <div className="training-status">{trainingStatus}</div>
    </div>
  );
};

export default TrainingNavigation;
