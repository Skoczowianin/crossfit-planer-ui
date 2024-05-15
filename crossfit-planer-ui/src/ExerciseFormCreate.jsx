import React, { useState} from 'react'
import Exercise from './Exercise';
import "./template.css";

const ExerciseFormCreate = () => {

const [exercises, setExercises] = useState([]);

function hideCreateForm() {
    setCreateForm(false);
  }
  
function handleCreateExercise(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const newExercise = {
      id: Date.now(),
      title: formData.get("title"),
      description: formData.get("description"),
      type: formData.get("type"),
      value: formData.get("value"),
      image: URL.createObjectURL(formData.get("image")),
    }
    
    setExercises([...exercises, newExercise]);
    setCreateForm(false);
    form.reset();
    
}

function removeExercise(id) {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises);
  }
  function hideCreateForm() {
    setCreateForm(false);
  }
  return (
    <div>
         <div>
        {exercises.map((exercise, index) => (
          <div key={exercise.id}>
            <Exercise
              image={exercise.image}
              title={exercise.title}
              description={exercise.description}
              value={exercise.value}
              type={exercise.type}
            />
            <button onClick={() => removeExercise(exercise.id)}>Delete</button>
            <button onClick={() =>handleEdit(exercise.id)}>Edit</button>
          </div>
        ))}
      </div>
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


export default ExerciseFormCreate