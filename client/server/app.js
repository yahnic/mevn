// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express() // create your express app

// make app use dependencies

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//routing

app.get('/todo', (req, res) => {
  res.send([
    'First Thing 1',
    'Second Thing 2'
  ])
})
app.listen(process.env.PORT || 8081) // client is already running on 8080