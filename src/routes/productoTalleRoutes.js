// productoTalleRoutes.js
const express = require("express");
const router = express.Router();
const productoTalleController = require("../controllers/productoTalleController");

router.get('/', productoTalleController.getAllSizes);
router.get('/:id', productoTalleController.getProductsSizeById);
router.post('/', productoTalleController.createSizeProduct);
router.put('/:id', productoTalleController.updateSizeProduct);
router.delete('/:id', productoTalleController.deleteSizeProduct);

module.exports = router; // Asegúrate de exportar el router correctamente
