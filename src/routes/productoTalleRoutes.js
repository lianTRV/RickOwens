const express = require("express");
const router = express.Router();
const productoTalleController = require("../controllers/productoTalleController") ;
//const products = require("../data/products.json"); // Importo el array de productos

router.get('/', productoTalleController.getAllSizes);
router.get('/:id', productoTalleController.getProductsSizeById);
router.post('/', productoTalleController.createSizeProduct);
router.put('/:id', productoTalleController.updateSizeProduct);
router.delete('/:id', productoTalleController.deleteSizeProduct);
// MODULOS IMPORTADOS DESDE productoTalleController.js

module.exports = router; // Asegúrate de exportar el router correctamente