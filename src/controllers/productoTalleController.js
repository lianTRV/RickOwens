const db = require('../db/db');
// Conexion a DB


const getAllSizes = (req, res) => {
    const sql = 'SELECT * FROM producto_talle';
    db.query(sql, (err, results) => {
        res.json(results);
    });
};


const getProductSizesById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM producto_talle WHERE id = ?';
    db.query(sql, [ id ], (err, result) =>{
        if (err) throw err;
        res.json(result);
    });
};


const createSizeProduct = (req, res) => {
    const { id, talle } = req.body;
    const sql = 'INSERT INTO producto_talle (id, talle) VALUES ( ?, ? )';
    db.query(sql, [ id, talle ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle creado correctamente', productsId: result.insertId});
    });
};


const updateSizeProduct = (req, res) => {
    const { id } = req.params;
    const sql = 'UPDATE producto_talle SET talle = ? WHERE id = ?';
    db.query(sql, [ id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle actualizado correctamente'});
    });
};


const deleteSizeProduct = (req, res) => {
    const { id_talle } = req.params;
    const sql = 'DELETE FROM producto_talle WHERE id_talle = ?';
    db.query(sql, [ id_talle ], (err, result) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).json({ message: 'Error en el servidor' });
        }
        console.log(`Filas afectadas: ${result.affectedRows}`);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Talle no encontrado' });
        } else {
            res.status(200).json({ message: 'Talle eliminado correctamente' });
        }
    });
};


module.exports = {
    getAllSizes,
    getProductSizesById,
    createSizeProduct,
    updateSizeProduct,
    deleteSizeProduct
};