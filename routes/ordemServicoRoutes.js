const express = require("express");
const router = express.Router();
const OrdemServico = require("../models/OrdemServico");

router.get("/", async (req, res) => {
  try {
    const ordens = await OrdemServico.findAll();
    res.json(ordens);
  } catch (error) {
    console.error("Erro ao buscar ordens de serviço:", error);
    res.status(500).json({ message: "Erro ao buscar ordens de serviço", error: error.message });
  }
});

module.exports = router;
