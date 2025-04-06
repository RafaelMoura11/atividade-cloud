const express = require("express");
const router = express.Router();
const OrdemServicoServico = require("../models/OrdemServicoServico");

router.get("/", async (req, res) => {
  try {
    const relacoes = await OrdemServicoServico.findAll();
    res.json(relacoes);
  } catch (error) {
    console.error("Erro ao buscar relações ordem-serviço e serviço:", error);
    res.status(500).json({
      message: "Erro ao buscar relações ordem-serviço e serviço",
      error: error.message,
    });
  }
});

module.exports = router;
