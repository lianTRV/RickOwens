const express = require("express");
const path = require("path");
const router = express.Router();

// Brinda el archivo HTML
router.get("/superAdmin/crearProducto", (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/adminForm.html'));
});

// Form añadir prod
router.post("/superAdmin/crearProducto", (req, res) => {
    const newProduct = req.body;
    const products = readProducts();

    products.push(newProduct);
    writeProducts(products);

    res.status(201).json({ message: "Product added successfully" });
});

module.exports = router;