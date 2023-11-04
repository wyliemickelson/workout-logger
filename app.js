const express = require('express')
const morgan = require('morgan')

const apiRoutes = require('./routes/apiRoutes')

const PORT = 3000

const app = express()
app.use(morgan('dev'))
app.use('/api', apiRoutes)

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

