const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sistema-adote-db')
mongoose.Promise = global.Promise

module.exports = mongoose