const express = require("express");
const router = express.Router();
const servicoController = require("../controllers/servicoController");

router.get("/", servicoController.getAllServicos);
router.get("/:id", servicoController.getServicoById);
router.post("/", servicoController.createServico);
router.put("/:id", servicoController.updateServico);
router.delete("/:id", servicoController.deleteServico);

module.exports = router;
