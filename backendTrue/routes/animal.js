const express = require("express");
const router = express.Router();
const Animal = require("../models/animalModel");
var ObjectId = require('mongodb').ObjectID;

router.get("/", async (req, res) => {
  try {
    const animais = await Animal.find();
    res.json(animais);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/:id", getAnimal, async (req, res) => {
  res.json(res.animal);
});

router.get('/filtro', async (req, res) => {

  console.log("entrou")
  let filtro = {}

  if (req.body.porte) {
    filtro.porte = req.body.porte;
  }
  if (req.body.raca) {
    filtro.raca = req.body.raca;
  }
  if (req.body.tipo) {
    filtro.tipo = req.body.tipo;
  }
  console.log(filtro);
  try {
    const animais = await Animal.find({
      porte: filtro.porte || ""
    }, {
      raca: filtro.raca || ""
    }, {
      tipo: filtro.tipo || ""
    });
    res.json(animais);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.post("/", async (req, res) => {
  const animal = new Animal({
    nome: req.body.nome,
    descricao : req.body.descricao,
    idade : req.body.idade,
    sexo : req.body.sexo,
    raca: req.body.raca,
    vacina : req.body.vacina,
    porte: req.body.porte,
    tipo: req.body.tipo
  });
  try {
    const novoAnimal = await animal.save();
    res.status(201).json(novoAnimal);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
});

router.patch("/:id", getAnimal, async (req, res) => {
  const arr = Object.keys(req.body).map((key) => [key, req.body[key]]);
  for (let atributo of arr) {
    res.animal[atributo[0]] = atributo[1]
  }
  try {
    const animalAtualizado = await res.animal.save();
    res.json(animalAtualizado);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
});

router.delete("/:id", getAnimal, async (req, res) => {
  try {
    await res.animal.remove();
    res.json({
      message: "Animal deletado"
    });
  } catch (error) {
    res.status(500).json({
      message: err.message
    });
  }
});

async function getAnimal(req, res, next) {
  let animal;
  try {
    animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({
        message: "Cannot find animal"
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
  res.animal = animal;
  next();
}

module.exports = router;