const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController") ;
//const products = require("../data/products.json"); // Importo el array de productos

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
// MODULOS IMPORTADOS DESDE productsController.js

module.exports = router;
 // Asegúrate de exportar el router correctamente


