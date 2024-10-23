import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HOME/Home";
import NavBar from "./components/navBar/NavBar";
import WorkoutForm from "./components/WorkoutForm/WorkoutForm";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-workout" element={<WorkoutForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
