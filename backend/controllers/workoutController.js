const workoutModel = require('../models/workoutsModel')
const mongoose = require('mongoose')


//get workouts
const getAllWorkouts = async (req,res)=>{
    const allWorkouts = await workoutModel.find({}).sort({createdAt : -1})

    res.status(200).json(allWorkouts)
}


//get single 
const getSingleWorkout = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout does not exist"})
    }

    const singleWorkout = await workoutModel.findById(id)

    if(!singleWorkout){
        return res.status(404).json({error: 'workout does not exist'})
    }

    res.status(200).json(singleWorkout)
}



//create new 

const createNewWorkout = async(req,res)=>{
    const {workout_name, reps , weight} = req.body

    try {
        const newWorkout = await workoutModel.create({workout_name, reps , weight})
        res.status(200).json(newWorkout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete workout
const deleteAWorkout = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout does not exist"})
    }
    const deletedWorkout = await workoutModel.findOneAndDelete({_id: id})

    if(!deletedWorkout){
        return res.status(404).json({error: 'workout does not exist'})
    }
    res.status(200).json(deleteAWorkout)

}


//update workout
const updateAWorkout = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "workout does not exist"})
    }

    const workoutUpdate = await workoutModel.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workoutUpdate){
        return res.status(404).json({error: 'workout does not exist'})
    }
    res.status(200).json(workoutUpdate)
}



module.exports = {
    createNewWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteAWorkout,
    updateAWorkout,
}