const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Importar o pacote cors

const app = express();
const port = process.env.PORT || 3000;

// Usar o middleware CORS para permitir solicitações de qualquer origem
app.use(cors());

// Caminho absoluto para o arquivo db.json
const filePath = path.join(__dirname, "db.json");

// Leitura do arquivo db.json
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Endpoint principal para retornar o JSON
app.get("/", (req, res) => {
  res.json(data);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
