import React from 'react'
import "./removePopUp.css";

const RemovePopUp = ({closePopUp, deleteExercise, exerciseId}) => {

  return (
    <>
      <div className="popup">
        <button onClick={() => deleteExercise(exerciseId)}>TAK</button>
        <button onClick={closePopUp}>NIE</button>
        </div>
        <div className='overlay'></div>
    
    </>
 
    
  )
}

export default RemovePopUp;
