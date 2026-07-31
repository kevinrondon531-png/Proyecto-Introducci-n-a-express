const express = require("express")
const app = express()

app.get("/", (_, res) => {
  res.send(`Hola, estoy aprendiendo express, ficha 3407181 ADSO en el sena`, );
});

app.listen(3000, () => {
  console.log(`Servidor en funcionamiento en el puerto: http://localhost:3000`);
});