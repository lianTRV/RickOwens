const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController") ;

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
// Modulos importados desde productsController.js

module.exports = router;