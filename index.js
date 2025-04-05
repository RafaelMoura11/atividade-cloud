const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Está funcionando');
});

app.get('/ping', (req, res) => {
    res.send('Pong');
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
