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