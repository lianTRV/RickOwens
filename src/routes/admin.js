const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

/* // Funcion para leer productos de un JSON
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
}; */

/* // Funcion para escribir productos de un JSON
const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
}; */

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