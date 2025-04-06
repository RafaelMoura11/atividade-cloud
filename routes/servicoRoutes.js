const express = require("express");
const router = express.Router();
const Servico = require("../models/Servico");

router.get("/", async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    res.json(servicos);
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
    res.status(500).json({ message: "Erro ao buscar serviços", error: error.message });
  }
});

module.exports = router;
