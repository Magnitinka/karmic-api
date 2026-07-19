const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Подключаем роутер из папки routes (поднимаемся на уровень выше)
const resultRoutes = require('../routes/result2');
app.use('/api/result', resultRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
