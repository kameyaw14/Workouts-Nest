import React, { useEffect, useState } from "react";
import WorkoutDetails from "../../src/components/WorkoutDetails/WorkoutDetails";
import "./Home.css";
import WorkoutForm from "../../src/components/WorkoutForm/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = async () => {
    const response = await fetch("http://localhost:3000/api/workouts/");
    const fetchJson = await response.json();

    if (response.ok) {
      setWorkouts(fetchJson);
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
          {workouts ? (
            workouts.map((item) => (
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
