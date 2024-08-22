const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Caminho absoluto para o arquivo db.json
const filePath = path.join(__dirname, "db.json");

// Leitura do arquivo db.json
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Endpoint principal para retornar o JSON
app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
