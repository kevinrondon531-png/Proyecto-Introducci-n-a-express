const express = require("express")
const app = express()
require("dotenv/config")
const puerto = process.env.PUERTO || 3000

//endpoint raiz
app.get("/", (_, res) => {
  res.send(`API Rest - Aprendices`);
});


app.listen(puerto, () => {
  console.log(`Servidor en funcionamiento en el puerto: http://localhost:${puerto}`);
});