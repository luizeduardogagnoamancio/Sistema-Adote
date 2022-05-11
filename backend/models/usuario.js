const mongoose = require('../database')

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
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
        type: Date,
        require: true
    },
    sexo: {
        type: String,
        require: true
    }

})

const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario