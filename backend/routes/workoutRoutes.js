const express = require('express')
const myRouter = express.Router()
const {
    createNewWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteAWorkout,
    updateAWorkout,
} = require('../controllers/workoutController')

//get all workouts
myRouter.get('/',getAllWorkouts)

//get single workouts
myRouter.get('/:id',getSingleWorkout)

//post a new workouts
myRouter.post('/',createNewWorkout)

//delete   workouts
myRouter.delete('/:id',deleteAWorkout)
 //update single workouts
myRouter.patch('/:id',updateAWorkout)


module.exports = myRouter