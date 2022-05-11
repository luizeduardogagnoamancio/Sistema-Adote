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
    endereco: {
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