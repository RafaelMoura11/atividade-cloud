const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ message: "Erro ao buscar clientes", error: error.message });
  }
});

module.exports = router;
