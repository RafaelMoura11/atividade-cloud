const express = require("express");
const sequelize = require("./config/db");
require("dotenv").config();
require("./models/Cliente");
require("./models/Veiculo");
require("./models/Servico");
require("./models/OrdemServico");
require("./models/OrdemServicoServico");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota simples para testar
app.get("/", (req, res) => {
  res.send("API da Oficina rodando!");
});

// Sincronizar DB e subir o servidor
sequelize.sync({ alter: true }).then(() => {
  console.log(`Banco sincronizado em ${process.env.DB_HOST}`);
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
