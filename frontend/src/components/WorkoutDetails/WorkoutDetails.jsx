import React from "react";

const WorkoutDetails = ({ workout }) => {
  return (
    <div>
      <div className="workDetails">
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
    </div>
  );
};

export default WorkoutDetails;
