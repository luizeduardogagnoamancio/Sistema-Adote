const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sistema-adote-db', { useMongoClient: true})
mongoose.Promise = global.Promise

module.exports = mongoose