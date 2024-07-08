// app.js
const express = require("express");
const bodyParser = require('body-parser');
const productsRouter = require("./routes/productsRoutes");
const productoTalleRoutes = require("./routes/productoTalleRoutes");
const adminRoutes = require("./routes/admin"); // Asegúrate de que admin.js esté en la carpeta routes
const db = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //????

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de rutas
app.use("/products", productsRouter);
app.use("/productoTalle", productoTalleRoutes);
app.use('/productos/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
