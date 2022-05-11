const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    data: {
        type: Date,
        require: true
    },
    formulario: [{}],
    feedback: [{}]
    
})

const Pedido = mongoose.model('Pedido', UsuarioSchema)

module.exports = Pedido