const express = require('express')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.post('/registro', async (req, res) => {
    try {
        console.log(req.body);
        const usuario = await Usuario.create(req.body)

        return res.send(usuario)
    } catch (err) {
        return res.status(400).send({ error: 'Erro de Cadastro' })
    }
})

module.exports = app => app.use('/auth', router)