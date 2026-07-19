const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Подключаем только нужный роут result2
const resultRoutes = require('./routes/result2');

const app = express();

app.use(cors());
app.use(express.json());

// Временно отключаем calc и payment, чтобы избежать ошибок
// const calcRoutes = require('./routes/calc');
// const paymentRoutes = require('./routes/payment');
// app.use('/api/calc', calcRoutes);
// app.use('/api/payment', paymentRoutes);

app.use('/api/result', resultRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
