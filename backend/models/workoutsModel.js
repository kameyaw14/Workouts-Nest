const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkoutSchema = mongoose.Schema({
    workout_name:{
        type:String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    weight :{
        type:Number,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('Excercise',WorkoutSchema)