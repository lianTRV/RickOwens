const express = require("express");
const router = express.Router();
const products = require("../data/products.json"); // Importo el array de productos


// const bodyParser = require('body-parser');
// agregar body parser en products.js y productoTalle.js ?????


//const productoTalleController = require("../controllers/productoTalleController.js") ;

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



// Ruta para obtener todos los talles de la DB
router.get('/talles', (req, res) => {
  const sql = 'SELECT * FROM producto_talle';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});



// Ruta para obtener los talles dispobiles de un id de la BD
router.get('/talles/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT talle FROM producto_talle WHERE id = ?';
  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});



// Ruta para crear un nuevo talle para un producto de la DB
  router.post('/talles', (req, res) => {
  const { id, talle } = req.body;
  const sql = 'INSERT INTO producto_talle (id, talle) VALUES (?, ?)';
  
  db.query(sql, [id, talle], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).send('Talle creado exitosamente');
  });
});




// Ruta para eliminar un talle de un producto específico de la DB
router.delete('/talles', (req, res) => {
  const { id_talle } = req.params;
  const sql = 'DELETE FROM producto_talle WHERE id_talle = ?';
  
  db.query(sql, [id_talle], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('Talle no encontrado');
    } else {
      res.status(200).send('Talle eliminado exitosamente');
    }
  });
});






// Ruta para modificar un producto por talle de la DB (?)
/* router.put('/talles', (req, res) => {
  const { id_talle } = req.params;
  const { talle } = req.body;
  const sql = 'UPDATE producto_talle SET talle = ? WHERE id_talle = ?';
  
  db.query(sql, [ id_talle, talle ], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('Talle no encontrado');
    } else {
      res.status(200).send('Talle actualizado exitosamente');
    }
  });
}); */
/* BORRAR EDITAR TALLE */


