const express = require("express");
const router = express.Router();
const productoTalleController = require("../controllers/productoTalleController");

router.get('/', productoTalleController.getAllSizes);
router.get('/:id', productoTalleController.getProductSizesById);
router.post('/', productoTalleController.createSizeProduct);
/* router.put('/:id_talle', productoTalleController.updateSizeProduct); */
router.delete('/:id_talle', productoTalleController.deleteSizeProduct);

module.exports = router; // Asegúrate de exportar el router correctamente
