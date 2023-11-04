const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  restTimer: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  weightMetric: {
    type: String,
    required: true,
    default: 'lbs'
  },
  sets: [setSchema]
})

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

module.exports = exerciseSchema