import React, { useEffect, useState } from "react";
import WorkoutDetails from "../../src/components/WorkoutDetails/WorkoutDetails";
import "./Home.css";
import WorkoutForm from "../../src/components/WorkoutForm/WorkoutForm";
import { UseWorkoutContext } from "../../src/hooks/UseWorkoutContext";

const Home = () => {
  const { myWorkouts, dispatch } = UseWorkoutContext();

  const fetchWorkouts = async () => {
    const response = await fetch("http://localhost:3000/api/workouts/");
    const fetchJson = await response.json();

    if (response.ok) {
      dispatch({ type: "FETCH_WORKOUTS", payload: fetchJson });
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="container2 workoutsDiv">
      <div>
        <h1>ALL WORKOUTS</h1>
        <div className="workouts">
          {myWorkouts ? (
            myWorkouts.map((item) => (
              <WorkoutDetails key={item._id} workout={item} />
            ))
          ) : (
            <h3>Having problems loading workouts</h3>
          )}
        </div>
      </div>
      <div className="workoutFormDiv">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
