const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema({
    data: {
        type: Date,
        require: true
    },
    formulario: [{}],
    feedback: [{}]
    
})

module.exports = mongoose.model('Pedido', pedidoSchema)
