import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import ExerciseFormCreate from "./ExerciseFormCreate";
import ExerciseFormEdit from "./ExerciseFormEdit";
import { loadStorage, saveExercises } from "./LocalStorageSetup";
import RemovePopUp from "./RemovePopUp";
import "./template.css";

const Training = () => {

  const [editForm, setEditForm] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [createForm, setCreateForm] = useState(false);
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  useEffect(() => {
    setExercises(loadStorage());
  }, []);

  //create form
  function displayCreateForm() {
    setCreateForm(true)
  }

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
    const newExercises = [...exercises, newExercise];
    setExercises(newExercises);
    saveExercises(newExercises);
    setCreateForm(false);
    form.reset();
}
  
 //editform
  function displayEditForm() {
    setEditForm(true);
  }

  function hideEditForm() {
    setEditForm(false);
  }

  //remove exercise
  function removeExercise(id) {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises);
    saveExercises(updatedExercises);
    closePopUp();
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
    saveExercises(updatedExercises)
  }
  // PopUp
  function closePopUp() {
    setDisplayPopUp(false);
  }
  function openPopUp(exerciseId) {
    setExerciseId(exerciseId);
    setDisplayPopUp(true);
  }
 
  return (
    <div className="template-container">
      <h2>Miki Training</h2>
      <div>In this page I will show you some exercises</div>
      <button onClick={displayCreateForm}>Add Exercise</button>

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
            <button onClick={() => openPopUp(exercise.id)}>Delete</button>
            <button onClick={() =>handleEdit(exercise.id)}>Edit</button>
          </div>
        ))}
      </div>

      {createForm && <ExerciseFormCreate hideCreateForm={hideCreateForm} handleCreateExercise={handleCreateExercise} />}

      {editForm && <ExerciseFormEdit hideEditForm={hideEditForm} handleEditSubmit={handleEditSubmit} currentExercise={currentExercise}/>}
      {displayPopUp && <RemovePopUp closePopUp={closePopUp} deleteExercise={removeExercise} exerciseId={exerciseId}/>}
    </div>
  );
};

export default Training;
