const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/ping', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao conectar ao banco de dados');
    }
    res.json({ message: 'pong', db_result: results[0].result });
  });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
