import React, { useState } from 'react'

const TrainingNavigation = () => {
    const [buttonName, setButtonName] = useState("START TRAINING");

    function startTraining() {
        let btnName = "PAUSE TRAINING"
        setButtonName(btnName)

        if(buttonName === "PAUSE TRAINING") {
            continueTraining();
        }
    }
    function continueTraining() {
        let btnName2 = "CONTINUE TRAINING"
        setButtonName(btnName2)
    }
    function stopTraining() {
        let defaultName = "START TRAINING"
        setButtonName(defaultName)
    }
  return (
    <div>
        <button onClick={startTraining}>{buttonName}</button>
        <button onClick={stopTraining}>STOP TRAINING</button>
    </div>
  )
}

export default TrainingNavigation;
