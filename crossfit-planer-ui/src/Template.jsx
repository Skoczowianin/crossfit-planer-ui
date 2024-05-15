import React, { useState } from "react";
import Exercise from "./Exercise";
import ExerciseFormCreate from "./ExerciseFormCreate";
import "./template.css";

const Template = () => {

  const [editForm, setEditForm] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [createForm, setCreateForm] = useState(false);

  function displayCreateForm() {
    setCreateForm(true)
  }

  function hideCreateForm() {
    setCreateForm(false);
  }

  function displayEditFOrm() {
    setEditForm(true);
  }


  function hideEditForm() {
    setEditForm(false);
  }


  
  function handleEdit(id) {
    const editExercise = exercises.filter((exercise)=>exercise.id ==id)[0];
    setCurrentExercise(editExercise);

    setEditForm(true);
  }
  function handleEditSubmit(event) {
   event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    
    const updatedExercise = {
      ...currentExercise,
      title: formData.get("title"),
      description: formData.get("description"),
      type: formData.get("type"),
      value: formData.get("value"),
      image: URL.createObjectURL(formData.get("image")),
    };
   

      const updatedExercises = exercises.map((exercise) =>
      exercise.id === currentExercise.id ? updatedExercise : exercise
  );
    setExercises(updatedExercises); 
    setEditForm(false);
    setCurrentExercise(null);
  }
 
  return (
    <div className="template-container">
      <h2>Miki Training</h2>
      <div>In this page I will show you some exercises</div>
      <button onClick={displayCreateForm}>Add Exercise</button>
      {createForm && <ExerciseFormCreate visible={createForm} />} 
{editForm && (
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
      )}
    </div>
  );
};

export default Template;
