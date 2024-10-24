import { createContext, useReducer } from "react";

const WorkoutContext = createContext();

const WorkoutReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WORKOUTS":
      return {
        myWorkouts: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        myWorkouts: [action.payload, ...state.myWorkouts],
      };
    default:
      return state;
  }
};

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkoutReducer, {
    myWorkouts: [],
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext, WorkoutContextProvider, WorkoutReducer };
