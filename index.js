const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000; // Use a porta do ambiente para deploy

// Leitura do arquivo db.json
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// Endpoint para retornar o conteúdo do db.json
app.get("/", (req, res) => {
  res.json(data);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
