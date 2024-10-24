import { useContext } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";

const UseWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error("useWorkoutContext must be inside a WorkoutContextProvider");
  }

  return context;
};

export { UseWorkoutContext };
