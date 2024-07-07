const db = require('../db/db');
 // EL OBJETO DB POSEE LA CONEXION A LA DB

const getAllSizes = (req, res) => {
    const sql = 'SELECT * FROM producto_talle'; // STRING QUE USARA LA DB
    db.query(sql, (err, results) => { // el metodo query recibe del objeto DB recibe por parametro la consulta que generamos
        if (err) throw err;
        res.json(results);
    });
};

const getProductsSizeById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM producto_talle WHERE id = ?';
    db.query(sql, [ id ], (err, result) =>{
        if (err) throw err;
        res.json(result);
    });
};
// EL ? es un marcador de posicion que sera reemplazado por el valor de id para
// evitar inyecciones SQL

const createSizeProduct = (req, res) => {
    const { talle } = req.body;
    const sql = 'INSERT INTO producto_talle (talle) VALUES ( ? )';
    db.query(sql, [ talle ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle creado correctamente', productsId: result.insertId});
    });
};
// productsId o productId ????????????

const updateSizeProduct = (req, res) => {
    const { id } = req.params;
    const sql = 'UPDATE producto_talle SET talle = ? WHERE id = ?';
    db.query(sql, [ id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle actualizado correctamente'});
    });
};

const deleteSizeProduct = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM producto_talle WHERE id = ?';
    db.query(sql, [ id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle eliminado correctamente'});
    });
};

module.exports = {
    getAllSizes,
    getProductsSizeById,
    createSizeProduct,
    updateSizeProduct,
    deleteSizeProduct
};