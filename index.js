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
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
  });
  

app.get('/veiculos', async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    console.error("Erro ao buscar veículos:", error);
    res.status(500).json({ message: 'Erro ao buscar veículos', error: error.message });
  }
});

app.get('/servicos', async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    res.json(servicos);
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
    res.status(500).json({ message: 'Erro ao buscar serviços', error: error.message });
  }
});

app.get('/ordens-servico', async (req, res) => {
  try {
    const ordens = await OrdemServico.findAll();
    res.json(ordens);
  } catch (error) {
    console.error("Erro ao buscar ordens de serviço:", error);
    res.status(500).json({ message: 'Erro ao buscar ordens de serviço', error: error.message });
  }
});

app.get('/ordens-servico-servicos', async (req, res) => {
  try {
    const relacoes = await OrdemServicoServico.findAll();
    res.json(relacoes);
  } catch (error) {
    console.error("Erro ao buscar relações de ordem-serviço e serviço:", error);
    res.status(500).json({ message: 'Erro ao buscar relações de ordem-serviço e serviço', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
