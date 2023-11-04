const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setSchema = new Schema({
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
})

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  restTimer: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
    default: ''
  },
  weightMetric: {
    type: String,
    default: 'lbs'
  },
  sets: [setSchema]
})

module.exports = exerciseSchema