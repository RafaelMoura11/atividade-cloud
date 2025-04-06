const express = require("express");
const router = express.Router();
const Veiculo = require("../models/Veiculo");

router.get("/", async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    console.error("Erro ao buscar veículos:", error);
    res.status(500).json({ message: "Erro ao buscar veículos", error: error.message });
  }
});

module.exports = router;
