const db = require('../db/db'); // CONE BD

const getAllSizes = (req, res) => {
    const sql = 'SELECT * FROM producto_talle'; // STRING QUE USARA LA DB
    db.query(sql, (err, results) => { // el metodo query recibe del objeto DB recibe por parametro la consulta que generamos
        if (err) throw err;
        res.json(results);
    });
};

const getProductSizesById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM producto_talle WHERE id = ?';
    db.query(sql, [ id ], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};


const createSizeProduct = (req, res) => {
    const { id, talle } = req.body;
    const sql = 'INSERT INTO producto_talle (id, talle) VALUES ( ?, ?)';
    db.query(sql, [ id, talle ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle creado correctamente para el id especificado', productsId: result.insertId});
    });
};
// productsId o productId ????????????

/* const updateSizeProduct = (req, res) => {
    const { id_talle } = req.params;
    const { talle } = req.body; // Extraer los datos del cuerpo de la solicitud
    const sql = 'UPDATE producto_talle SET talle = ? WHERE id_talle = ?';
    db.query(sql, [ id_talle, talle ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Talle actualizado correctamente'});
    });
}; */


const deleteSizeProduct = (req, res) => {
    const { id_talle } = req.params; // Extraer el id_talle de los parámetros de la ruta
    console.log("ID Talle:", id_talle); // Verificar que el id_talle se extrae correctamente
    const sql = 'DELETE FROM producto_talle WHERE id_talle = ?';

    db.query(sql, [id_talle], (err, result) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Talle no encontrado');
        }
        res.json({ message: 'Talle eliminado correctamente' });
    });
};


module.exports = {
    getAllSizes,
    getProductSizesById,
    createSizeProduct,
   /*  updateSizeProduct, */
    deleteSizeProduct
};