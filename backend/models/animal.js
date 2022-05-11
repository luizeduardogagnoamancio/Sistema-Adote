const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    raca: {
        type: String,
        require: true
    },
    vacina: {
        type: String,
        require: true
    },
    porte: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    }

})

const Animal = mongoose.model('Animal', AnimalSchema)

module.exports = Animal