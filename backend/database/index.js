const mongoose = require('mongoose')

/* mongoose.connect('mongodb+srv://adote:adoteSenha@cluster0.hpzsz.mongodb.net/?retryWrites=true&w=majority') */
mongoose.connect('mongodb://localhost/sistema-adote-db')
mongoose.Promise = global.Promise

module.exports = mongoose