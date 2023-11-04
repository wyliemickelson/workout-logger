const express = require('express')
const { default: mongoose } = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const apiRoutes = require('./routes/apiRoutes')
const Workout = require('./models/workout')

const PORT = 3000

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`)))
  .catch(err => console.log(err))

const app = express()
app.use(morgan('dev'))
app.use('/api', apiRoutes)

app.get('/', (req, res) => {
  // const testWorkout = {
  //   title: 'My Workout',
  //   exercises: [
  //     {
  //       title: 'Pull ups',
  //       sets: [
  //         {
  //           reps: 10,
  //           weight: 20
  //         },
  //         {
  //           reps: 10,
  //           weight: 20
  //         },
  //         {
  //           reps: 10,
  //           weight: 20
  //         }
  //       ]
  //     }
  //   ]
  // }
  // const w1 = new Workout(testWorkout)
  // w1.save()

  res.sendFile('index.html', { root: __dirname })
})

