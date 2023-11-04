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
    default: 90,
  },
  dateStart: {
    type: Date,
    default: Date.now()
  },
  notes: {
    type: String,
    default: '',
  },
  exercises: [exerciseSchema]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout