import React from 'react'
import "./training.css";

const ExerciseFormEdit = ({handleEditSubmit, hideEditForm, currentExercise}) => {
  return (
    <div>
        <div className="adding-exercise">        
        </div>
        <form className="form-container" onSubmit={handleEditSubmit}>
          <input type="text" name="title" placeholder="Title" defaultValue={currentExercise.title} />
          <br />
          <input type="text" name="description" placeholder="Description" defaultValue={currentExercise.description}/>
          <br />
          <select name="type" defaultValue={currentExercise.type}>
            <option value="repetitions">Repetitions</option>
            <option value="seconds">Seconds</option>
          </select>
          <br />
          <input
            type="number"
            name="value"
            defaultValue={currentExercise.value}
            placeholder="Number of repetitions or seconds"
            min={1}
          />
          <br />
          <input type="file" name="image" accept="image/*" filename={currentExercise.image} />
          <br />
          <br />
          <div className="button-space">
            <button type="submit" onSubmit={handleEditSubmit}>Save</button>
            <button type="button" onClick={hideEditForm}>
              Cancel
            </button>
          </div>
        </form>
    </div>
  )
}

export default ExerciseFormEdit;
