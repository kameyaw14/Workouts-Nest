import React from "react";
import { UseWorkoutContext } from "../../hooks/UseWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { myWorkouts, dispatch } = UseWorkoutContext();

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({
        type: "FETCH_WORKOUTS",
        payload: myWorkouts.filter((item) => item._id !== workout._id),
      });
    } else {
      console.error("Failed to delete workout");
    }
  };

  return (
    <div>
      <div className="workDetails">
        <div>
          <h3>{workout.workout_name}</h3>
          <p>
            <strong>Weight (lbs): </strong>
            {workout.weight}
          </p>
          <p>
            <strong>reps : </strong>
            {workout.reps}
          </p>
          <p>
            <strong>created at : </strong>
            {workout.createdAt}
          </p>
        </div>
        <button className="delete-btn" onClick={handleDelete}>
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
