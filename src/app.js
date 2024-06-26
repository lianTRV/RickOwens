const express = require("express");
const productsRouter = require("./routes/products"); // router = routes (¿?)

const app = express();
app.use(express.json()); // Para poder usar el cuerpo de las peticiones

/* 
const adminRoutes = require('./routes/admin');
app.use(express.urlencoded({ extended: true }));

// Use the admin routes
app.use('/productos/admin', adminRoutes); // Cambiar productos por products (¿?)
*/

app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000; // Puerto en el que correrá el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
