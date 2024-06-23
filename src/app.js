const express = require("express");
const productsRouter = require("./routes/products");

const app = express();
app.use(express.json()); // Para poder usar el cuerpo de las peticiones

app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000; // Puerto en el que correrá el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
