const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Estoy en la ruta HOME")
});

app.get("/home2", (req, res) => {
    res.send("Estoy en la ruta HOME2")
});

app.get("*", (req, res) => {
    res.send("Error ruta *")
});

app.listen(3000, () => {
  console.log("Servidor express en escucha en el puerto 3000");
});
