import React, { useState } from "react";
import "./WorkoutForm.css";
import { useNavigate } from "react-router-dom";
import { UseWorkoutContext } from "../../hooks/UseWorkoutContext";

const WorkoutForm = () => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutLoad, setWorkoutLoad] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = UseWorkoutContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const errorMessages = [];

    if (!workoutTitle) errorMessages.push("Please fill in the workout name!!");
    if (!workoutLoad) errorMessages.push("Please enter the load!!");
    if (!workoutReps) errorMessages.push("Please enter the reps!!");
    if (workoutLoad < 0) errorMessages.push("Please enter valid load!!");
    if (workoutReps < 0) errorMessages.push("Please enter valid reps!!");

    if (errorMessages.length > 0) {
      setError(errorMessages.join(" "));
      return;
    }

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
      dispatch({ type: "CREATE_WORKOUTS", payload: json });
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
            className={error && !workoutTitle ? "error" : ""}
          />
        </div>

        <div className="formSection">
          <label>Workout load(lbs): </label>
          <input
            type="number"
            onChange={(e) => setWorkoutLoad(e.target.value)}
            value={workoutLoad}
            className={error && !workoutLoad ? "error" : ""}
          />
        </div>

        <div className="formSection">
          <label>Workout reps: </label>
          <input
            type="number"
            onChange={(e) => setWorkoutReps(e.target.value)}
            value={workoutReps}
            className={error && !workoutReps ? "error" : ""}
          />
        </div>

        <button>Add Workout</button>
        {error && <div className="errorMessage"> {error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
