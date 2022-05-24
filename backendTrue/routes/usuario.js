const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuarioModel')

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getUsuario, async (req, res) => {
    res.json(res.usuario)
})

router.post('/', async (req, res) => {
    const usuario = new Usuario({
        nome:req.body.nome
    })
    try {
        const novoUsuario = await usuario.save()
        res.status(201).json(novoUsuario)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getUsuario, async (req, res) => {
    if (req.body.nome != null) {
        res.usuario.nome = req.body.nome
    }
    /* if (req.body.nome != null) {
        res.usuario.nome = req.body.nome
    } */
    try {
        const usuarioAtualizado = await res.usuario.save()
        res.json(usuarioAtualizado)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getUsuario, async (req, res) => {
    try {
        await res.usuario.remove()
        res.json({ message: 'Usuario deletado'})
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
})

async function getUsuario(req, res, next) {
    let usuario
    try {
        usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            return res.status(404).json({ message: 'Cannot find usuario'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.usuario = usuario
    next()
}



module.exports = router