const express = require("express");
const router = express.Router();
const productoTalleController = require("../controllers/productoTalleController");

router.get('/', productoTalleController.getAllSizes);
router.get('/:id', productoTalleController.getProductSizesById);
router.post('/', productoTalleController.createSizeProduct);
router.delete('/:id_talle', productoTalleController.deleteSizeProduct);
// Modulos importados desde productoTalleController.js

module.exports = router; 