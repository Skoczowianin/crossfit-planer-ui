import React from 'react'
import "./training.css";

const ExerciseFormCreate = ({hideCreateForm, handleCreateExercise}) => {

  return (
    <div>
   <div className="adding-exercise">
      </div>
        <form className="form-container" onSubmit={handleCreateExercise}>
          <input type="text" name="title" placeholder="Title" />
          <br />
          <input type="text" name="description" placeholder="Description" />
          <br />
          <select name="type">
            <option value="repetitions">Repetitions</option>
            <option value="seconds">Seconds</option>
          </select>
          <br />
          <input
            type="number"
            name="value"
            placeholder="Number of repetitions or seconds"
            min={1}
          />
          <br />
          <input type="file" name="image" accept="image/*" />
          <br />
          <br />
          <div className="button-space">
            <button type="submit">Add</button>
            <button type="button" onClick={hideCreateForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
  )
}


export default ExerciseFormCreate;
