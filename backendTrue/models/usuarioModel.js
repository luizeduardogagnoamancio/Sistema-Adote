const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique:true,
        require: true
    },
    senha: {
        type: String,
        unique: true,
        require: true
    },
    rua: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    uf: {
        type: String,
        require: true
    },
    cep: {
        type: String,
        require: true
    },
    data_nasc: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)