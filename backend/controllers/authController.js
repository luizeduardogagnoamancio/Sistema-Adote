const express = require('express')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.post('/registro', async (req, res) => {
    try {
        console.log(req.body);
        const usuario = await Usuario.create({nome : "Teste"})

        return res.send({ usuario })
    } catch (err) {
        return res.status(400).send({ error: 'Erro de Cadastro' })
    }
})

router.get('/animais', async (req, res) => {
    console.log("Entrou");
    res.send("Teste")
})

router.put('/animal', async (req, res) => {
    try {
        console.log(req.body);
        const usuario = await Usuario.create(req.body)

        return res.send(usuario)
    } catch (err) {
        return res.status(400).send({ error: 'Erro de Cadastro' })
    }
})

router.delete('/animal', async (req, res) => {
    try {
        console.log(req.body);
        const usuario = await Usuario.create(req.body)

        return res.send(usuario)
    } catch (err) {
        return res.status(400).send({ error: 'Erro de Cadastro' })
    }
})

module.exports = app => app.use('/auth', router)