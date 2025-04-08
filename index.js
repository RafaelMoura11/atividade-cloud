const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Importar rotas
const clienteRoutes = require("./routes/clienteRoutes");
const veiculoRoutes = require("./routes/veiculoRoutes");
const servicoRoutes = require("./routes/servicoRoutes");
const ordemServicoRoutes = require("./routes/ordemServicoRoutes");
const ordemServicoServicoRoutes = require("./routes/ordemServicoServicoRoutes");

// Usar rotas
app.use("/clientes", clienteRoutes);
app.use("/veiculos", veiculoRoutes);
app.use("/servicos", servicoRoutes);
app.use("/ordens-servico", ordemServicoRoutes);
app.use("/ordens-servico-servicos", ordemServicoServicoRoutes);

app.get("/", (req, res) => res.send("Está funcionando"));
// app.get("/ping", (req, res) => res.send("Pong"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
