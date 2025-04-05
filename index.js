const express = require('express');
const app = express();
require('dotenv').config();

const Cliente = require('./models/Cliente');
const Veiculo = require('./models/Veiculo');
const Servico = require('./models/Servico');
const OrdemServico = require('./models/OrdemServico');
const OrdemServicoServico = require('./models/OrdemServicoServico');

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Está funcionando');
});

app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Rotas GET
app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

app.get('/veiculos', async (req, res) => {
  const veiculos = await Veiculo.findAll();
  res.json(veiculos);
});

app.get('/servicos', async (req, res) => {
  const servicos = await Servico.findAll();
  res.json(servicos);
});

app.get('/ordens-servico', async (req, res) => {
  const ordens = await OrdemServico.findAll();
  res.json(ordens);
});

app.get('/ordens-servico-servicos', async (req, res) => {
  const relacoes = await OrdemServicoServico.findAll();
  res.json(relacoes);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
