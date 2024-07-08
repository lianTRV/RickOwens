const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-sil.alwaysdata.net',
    user: 'sil_grupo9',
    password: 'CACgrupo9',
    database: 'sil_rickowens'
});
// EN EL METODO CREATE CONNECTION DEBEMOS INDICAR EL HOST, USER, PASSWORD Y DB QUE DEBERA UTILIZAR EL OBJETO PARA CONECTAR LA DB



connection.connect((err) => {
    if (err) {
        console.error('Error conectando la DB:', err);
        return;
    }
    console.log('DB conectada correctamente');

// Si los datos son incorrectos, no se accede a la base de datos


connection.query('CREATE DATABASE IF NOT EXISTS sil_rickowens', (err, results) => {
    if (err) {
        console.error('Error creando la DB: ', err);
        return;
    }
    console.log('Database garantizada');

    connection.changeUser({ database: 'sil_rickowens'}, (err) => {
            if (err) {
                console.error('Error switching to sil_rickowens', err);
                return;
            }

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS producto (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    img VARCHAR(255) NOT NULL,
                    precio DECIMAL(10, 2) NOT NULL,
                    categoria VARCHAR(100) NOT NULL,
                    cantidad INT NOT NULL,
                    genero VARCHAR(50) NOT NULL
                );
                `;

            connection.query(createTableQuery, (err, results) => {
                if (err) {
                    console.error('Error creando la tabla: ', err);
                    return;
                }
                console.log('Tabla garantizada');
            });
        });
    });
});

module.exports = connection;