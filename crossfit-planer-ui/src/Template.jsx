import React, { useState } from "react";
import Exercise from "./Exercise";
import "./template.css";

const Template = () => {
  const [createForm, setCreateForm] = useState(false);
  const [exercises, setExercises] = useState([]);

  const [editForm, setEditForm] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);

  function displayCreateForm() {
    setCreateForm(true);

  }
  function displayEditFOrm() {
    setEditForm(true);
  }

  function handleAddExercise(event) {
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
    };

    setExercises([...exercises, newExercise]);
    setCreateForm(false);
    form.reset();
  }

  function hideCreateForm() {
    setCreateForm(false);
  }
  function hideEditForm() {
    setEditForm(false);
  }

  function removeExercise(id) {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises);
  }
  function handleEdit(id) {
    const editExercise = exercises.filter((exercise)=>exercise.id ==id)[0];
    setCurrentExercise(editExercise);

    console.log(id, editExercise);
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
  console.log(currentExercise)
  return (
    <div className="template-container">
      <h2>Miki Training</h2>
      <div>In this page I will show you some exercises</div>
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
        <button onClick={displayCreateForm}>Add Exercise</button>
      </div>
      {createForm && (
        <form className="form-container" onSubmit={handleAddExercise}>
          <input type="text" name="title" placeholder="Title" />
          <br />
          <input type="text" name="description" placeholder="Description" />
          <br />
          <select name="type" >
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
      )}

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
