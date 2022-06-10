const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
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
        type: Number,
        require: true
    },
    raca: {
        type: Boolean,
        require: true
    },
    vacina: {
        type: Boolean,
        require: true
    },
    porte: {
        type: Number,
        require: true
    },
    tipo: {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('Animal', animalSchema)