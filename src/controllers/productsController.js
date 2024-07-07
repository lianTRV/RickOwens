const db = require('../db/db');
// EL OBJETO DB POSEE LA CONEXION A LA DB

const getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM producto'; // STRING QUE USARA LA DB
    db.query(sql, (err, results) => { // el metodo query recibe del objeto DB recibe por parametro la consulta que generamos
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
// EL ? es un marcador de posicion que sera reemplazado por el valor de id para
// evitar inyecciones SQL

const createProduct = (req, res) => {
    const { nombre, img, precio, categoria, cantidad_disp, genero } = req.body;
    const sql = 'INSERT INTO producto (nombre, img, precio, categoria, cantidad_disp, genero) VALUES ( ?, ?, ?, ?, ?, ?)';
    db.query(sql, [ nombre, img, precio, categoria, cantidad_disp, genero ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Producto creado correctamente', productsId: result.insertId});
    });
};
// productsId o productId ????????????

const updateProduct = (req, res) => {
    const { nombre, img, precio, categoria, cantidad_disp, genero } = req.params;
    const sql = 'UPDATE producto SET nombre = ?, img = ?, precio = ?, categoria = ?, cantidad_disp = ?, genero = ? WHERE id = ?';
    db.query(sql, [nombre, img, precio, categoria, cantidad_disp, genero ], (err, result) => {
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