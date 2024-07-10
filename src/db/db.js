const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-sil.alwaysdata.net',
    user: 'sil_grupo9',
    password: 'CACgrupo9',
    database: 'sil_rickowens'
});

connection.connect((err) => {
    if (err) { // Si los datos son incorrectos, no se accede a la DB
        console.error('Error conectando la DB:', err);
        return;
    }
    console.log('DB conectada correctamente'); // Datos correctos, se ingresa a la DB
}); 

module.exports = connection;