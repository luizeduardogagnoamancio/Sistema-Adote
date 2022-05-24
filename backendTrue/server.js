require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

const usuarioRouter = require('./routes/usuario')
app.use('/usuario', usuarioRouter)

const animalRouter = require('./routes/animal')
app.use('/animal', animalRouter)

app.listen(3000, () => console.log('Listening to port 3000'))