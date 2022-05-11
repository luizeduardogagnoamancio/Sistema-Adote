/* const Joi = require('joi') */
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


require('./controllers/authController')(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))