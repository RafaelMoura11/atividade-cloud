const express = require("express");
const router = express.Router();
const ordemServicoController = require("../controllers/ordemServicoController");

router.get("/", ordemServicoController.getAllOrdens);
router.get("/:id", ordemServicoController.getOrdemById);
router.post("/", ordemServicoController.createOrdem);
router.put("/:id", ordemServicoController.updateOrdem);
router.delete("/:id", ordemServicoController.deleteOrdem);

module.exports = router;
