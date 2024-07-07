const express = require("express");
const router = express.Router();
const products = require("../data/products.json"); // Importo el array de productos


// const bodyParser = require('body-parser');
// agregar body parser en products.js y productoTalle.js ?????

// const productsController = require("../controllers/productsController.js") ;

const fs = require("fs");
const path = require("path");
// AGREGO ESTOS MODULOS PARA OPERACIONES CON ARCHIVOS

const productsFilePath = path.join(__dirname, '../data/products.json');
// CONEXION PATH CON ARCHIVO JSON

module.exports = router; // Asegúrate de exportar el router correctamente

const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
};
// FUNCION PARA ESCRIBIR PRODUCTOS EN EL JSON
// SE BORRA ? (no se usa json, se usa la DB ahora)



//SE REALIZAN CAMBIOS DE RUTA, CAMBIA RUTA JSON A BD


/* // Ruta para obtener productos por categoría o todos los productos
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
// RUTA VIEJA */


// Ruta para obtener los productos de la DB
router.get('/productos', (req, res) => {
  const sql = 'SELECT * FROM producto';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(200).json(results);
  });
});




/* // Ruta para obtener un producto por ID
router.get("/:id", (req, res) => {
  const { id } = req.params; // Obtengo el ID de los parámetros
  const product = products.find((product) => product.id == id); // Busco el producto por ID (se usa solo '==' y no '===' porque el id es un string y no un número entero)
  if (product) return res.json(product); // Si existe el producto lo devuelvo
  res.status(404).json("Product not found"); // Si no existe devuelvo un 404
});
// RUTA VIEJA 
*/


// Ruta para obtener un producto por ID de la DB
router.get('/producto/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM producto WHERE id = ?';
  
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).json(results[0]);
    }
  });
});





/* // Ruta para obtener un producto por género
router.get("/:genero", (req, res) => {
  const { genero } = req.params; // Obtengo el género de los parámetros
  const filteredProducts = products.filter(
    (product) => product.genero == genero
  ); // Busco los productos por género
  if (filteredProducts.length > 0) return res.json(filteredProducts); // Si existen productos los devuelvo
  res.status(404).json("Products not found"); // Si no existen devuelvo un 404
});
// RUTA VIEJA */


// Ruta para obtener productos por genero
router.get('/productos/genero/:genero', (req, res) => {
  const { genero } = req.params;
  const sql = 'SELECT * FROM producto WHERE genero = ?';
  
  db.query(sql, [genero], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('No se encontraron productos para el género especificado');
    } else {
      res.status(200).json(results);
    }
  });
});




/* // Ruta para crear un nuevo producto
router.post("/create", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json({ message: "Product created successfully" });
});
// RUTA VIEJA */


// Ruta para crear un nuevo producto en la DB
router.post('/productos', (req, res) => {
  const { nombre, img, precio, categoria, cantidad, genero } = req.body;

  const sql = 'INSERT INTO producto (nombre, img, precio, categoria, cantidad, genero) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [nombre, img, precio, categoria, cantidad, genero], (err, result) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});



/*
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
// RUTA VIEJA */

// Ruta para eliminar un producto por id de la tabla producto en la DB
router.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM producto WHERE id = ?';
  
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).send(`Producto con ID ${id} eliminado exitosamente`);
    }
  });
});



/*
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
// RUTA VIEJA */

// Ruta para modificar un producto por id de la tabla producto en la DB
router.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, img, precio, categoria, cantidad, genero } = req.body;
  
  const sql = `UPDATE producto SET nombre = ?, img = ?, precio = ?, categoria = ?, cantidad = ?, genero = ?, WHERE id = ?`;
  
  db.query(sql, [nombre, img, precio, categoria, cantidad, genero, id], (err, result) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(200).send(`Producto con ID ${id} actualizado exitosamente`);
    }
  });
});

