const express = require("express");
const app = express();

const productsRouter = require("./routes/productsRoutes");
const productoTalleRoutes = require("./routes/productoTalleRoutes");
const adminRoutes = require("./routes/admin");

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;


// Config. body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Config. rutas
app.use(express.json()); 
app.use("/products", productsRouter);
app.use("/productoTalle", productoTalleRoutes);
app.use('/productos/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});