import React, { useState } from "react";
import "./WorkoutForm.css";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutLoad, setWorkoutLoad] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myWorkout = {
      workout_name: workoutTitle,
      weight: workoutLoad,
      reps: workoutReps,
    };

    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(myWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("workout added", json);
      setWorkoutLoad("");
      setWorkoutReps("");
      setWorkoutTitle("");
    }
  };

  return (
    <div>
      <form className="WorkoutForm" onSubmit={handleSubmit}>
        <h3>Add new Workout</h3>

        <div className="formSection">
          <label>Workout name: </label>
          <input
            type="text"
            onChange={(e) => setWorkoutTitle(e.target.value)}
            value={workoutTitle}
          />
        </div>

        <div className="formSection">
          <label>Workout load(lbs): </label>
          <input
            type="number"
            onChange={(e) => setWorkoutLoad(e.target.value)}
            value={workoutLoad}
          />
        </div>

        <div className="formSection">
          <label>Workout reps: </label>
          <input
            type="number"
            onChange={(e) => setWorkoutReps(e.target.value)}
            value={workoutReps}
          />
        </div>

        <button>Add Workout</button>
        {error && <div>error: {error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
