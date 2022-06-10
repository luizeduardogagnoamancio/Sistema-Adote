require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { auth } = require('express-openid-connect')

mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const usuarioRouter = require('./routes/usuario')
app.use('/usuario', usuarioRouter)

const animalRouter = require('./routes/animal')
app.use('/animal', animalRouter)

app.listen(3000, () => console.log('Listening to port 3000'))