const express = require("express");
const router = express.Router();
const controller = require("../controllers/ordemServicoServicoController");

router.get("/", controller.getAll);
router.get("/:ordemId/:servicoId", controller.getById);
router.post("/", controller.create);
router.put("/:ordemId/:servicoId", controller.update);
router.delete("/:ordemId/:servicoId", controller.remove);

module.exports = router;
