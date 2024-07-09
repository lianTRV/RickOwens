const db = require('../db/db');
// Conexion a DB


const getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM producto';
    db.query(sql, (err, results) => { 
        if (err) throw err;
        res.json(results);
    });
};


const getProductsById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM producto WHERE id = ?';
    db.query(sql, [ id ], (err, result) =>{
        if (err) throw err;
        res.json(result);
    });
};


const createProduct = (req, res) => {
    const { nombre, img, precio, categoria, cantidad, genero } = req.body;
    const sql = 'INSERT INTO producto (nombre, img, precio, categoria, cantidad, genero) VALUES ( ?, ?, ?, ?, ?, ?)';
    db.query(sql, [ nombre, img, precio, categoria, cantidad, genero ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Producto creado correctamente', productsId: result.insertId});
    });
};


const updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, img, precio, categoria, cantidad, genero } = req.body;
    const sql = 'UPDATE producto SET nombre = ?, img = ?, precio = ?, categoria = ?, cantidad = ?, genero = ? WHERE id = ?';
    db.query(sql, [ nombre, img, precio, categoria, cantidad, genero, id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Producto actualizado correctamente'});
    });
};


const deleteProduct = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM producto WHERE id = ?';
    db.query(sql, [ id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Producto eliminado correctamente'});
    });
};


module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
};