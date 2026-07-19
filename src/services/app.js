const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Подключаем роут result2 (или result, если хочешь)
const resultRoutes = require('../routes/result3');
app.use('/api/result', resultRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
