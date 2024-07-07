const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

// Utility function to read products from the JSON file
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
};

// Utility function to write products to the JSON file
const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
};

// Serve the admin form HTML file
router.get("/superAdmin/crearProducto", (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/adminForm.html'));
});

// Handle form submissions to add products
router.post("/superAdmin/crearProducto", (req, res) => {
    const newProduct = req.body;
    const products = readProducts();

    products.push(newProduct);
    writeProducts(products);

    res.status(201).json({ message: "Product added successfully" });
});


// CREAR PANEL PARA BORRAR PRODUCTO
//
/*                                 */

module.exports = router;
