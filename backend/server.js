const express = require("express");
require("dotenv").config();
const workoutsRoutes = require("./routes/workoutRoutes");
const { default: mongoose } = require("mongoose");
const cors = require('cors');


// express app
const myApp = express();

// Use CORS middleware
myApp.use(cors());

//middleware
myApp.use(express.json());

myApp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
myApp.use("/api/workouts", workoutsRoutes);

//connect mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening for request
    myApp.listen(process.env.PORT, () => {
      console.log("database connected and listening...")
    });
  })
  .catch((err) => {
    console.log(err)
  });
