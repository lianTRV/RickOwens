const products = require("../data/products.json"); // Importo el array de productos
const express = require("express");
const router = express.Router();

/*
const fs = require("fs");
const path = require("path");
// AGREGO ESTOS MODULOS PARA OPERACIONES CON ARCHIVOS


const productsFilePath = path.join(__dirname, '../data/products.json');
// CONEXION PATH CON ARCHIVO JSON


const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
};
// FUNCION PARA ESCRIBIR PRODUCTOS EN EL JSON
*/

// Ruta para obtener productos por categoría o todos los productos
router.get("/", (req, res) => {
  const { categoria } = req.query; // Obtengo la categoría de los parámetros de consulta
  if (categoria) {
    const filteredCategory = products.filter(
      (product) => product.categoria.toLowerCase() === categoria.toLowerCase()
    );
    console.log("Filtered Category:", filteredCategory);
    return res.json(filteredCategory);
  }
  res.json(products); // Devuelve todos los productos si no hay categoría
});

// Ruta para obtener un producto por ID
router.get("/:id", (req, res) => {
  const { id } = req.params; // Obtengo el ID de los parámetros
  const product = products.find((product) => product.id == id); // Busco el producto por ID (se usa solo '==' y no '===' porque el id es un string y no un número entero)
  if (product) return res.json(product); // Si existe el producto lo devuelvo
  res.status(404).json("Product not found"); // Si no existe devuelvo un 404
});

// Ruta para obtener un producto por género
router.get("/:genero", (req, res) => {
  const { genero } = req.params; // Obtengo el género de los parámetros
  const filteredProducts = products.filter(
    (product) => product.genero == genero
  ); // Busco los productos por género
  if (filteredProducts.length > 0) return res.json(filteredProducts); // Si existen productos los devuelvo
  res.status(404).json("Products not found"); // Si no existen devuelvo un 404
});

/*
// Ruta para crear un nuevo producto
router.post("/create", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json({ message: "Product created successfully" });
});



// Ruta para eliminar un producto por ID
router.delete("/:id", (req, res) => {
  const { id } = req.params; // Obtengo el ID de los parámetros
  const index = products.findIndex((product) => product.id == id); // Busco el índice del producto por ID
  if (index !== -1) {
    products.splice(index, 1); // Elimino el producto del array
    writeProducts(products); // Guardo los cambios en el archivo JSON
    return res.json({ message: "Product deleted successfully" });
  }
  res.status(404).json("Product not found"); // Si no existe el producto devuelvo un 404
});



// Ruta para modificar un producto por ID
router.put("/:id", (req, res) => {
  const { id } = req.params; // Obtengo el ID de los parámetros
  const updatedProduct = req.body; // Obtengo los datos actualizados del cuerpo de la solicitud
  const index = products.findIndex((product) => product.id == id); // Busco el índice del producto por ID
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct }; // Actualizo el producto
    writeProducts(products); // Guardo los cambios en el archivo JSON
    return res.json({ message: "Product updated successfully" });
  }
  res.status(404).json("Product not found"); // Si no existe el producto devuelvo un 404
});
*/

module.exports = router; // Asegúrate de exportar el router correctamente
