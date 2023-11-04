const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exerciseSchema = require('./exercise')

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  defaultRestTimer: {
    type: Number,
    required: true
  },
  dateStart: {
    type: Date,
    required: true,
    default: new Date.now()
  },
  notes: {
    type: String,
    required: true,
  },
  exercises: [exerciseSchema]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout