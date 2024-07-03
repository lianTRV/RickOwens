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
// ESTO DE ARRIBA SE BORRARIA

/* // Ruta para obtener todos los talles
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
*/



// Ruta para obtener un producto por ID
router.get("/:id", (req, res) => {
  const { id } = req.params; // Obtengo el ID de los parámetros
  const product = products.find((product) => product.id == id); // Busco el producto por ID (se usa solo '==' y no '===' porque el id es un string y no un número entero)
  if (product) return res.json(product); // Si existe el producto lo devuelvo
  res.status(404).json("Product not found"); // Si no existe devuelvo un 404
});
// ESTO DE ARRIBA SE BORRARIA

/*
// RUTA PARA OBTENER LOS TALLES DE UN ID
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
*/



// Ruta para crear un nuevo producto
router.post("/create", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json({ message: "Product created successfully" });
});
// ESTO DE ARRIBA SE BORRARIA

/*
// Ruta para crear un nuevo talle para un producto
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
*/




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
// ESTO DE ARRIBA SE BORRARIA

/*
// Ruta para eliminar un talle de un producto específico
router.delete('/talles', (req, res) => {
  const { id, talle } = req.body;
  const sql = 'DELETE FROM producto_talle WHERE id = ? AND talle = ?';
  
  db.query(sql, [id, talle], (err, results) => {
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
*/




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

// ESTO DE ARRIBA SE BORRARIA

/*
router.put('/talles', (req, res) => {
  const { id, oldTalle, newTalle } = req.body;
  const sql = 'UPDATE producto_talle SET talle = ? WHERE id = ? AND talle = ?';
  
  db.query(sql, [newTalle, id, oldTalle], (err, results) => {
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
});
*/

