const express = require("express");
const router = express.Router();


// Ruta obtener todos los talles
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


// Ruta obtener los talles de un producto en especifico
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


// Ruta agregar un nuevo talle de un producto en especifico
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


// Ruta eliminar un talle de un producto en especifico
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


module.exports = router;