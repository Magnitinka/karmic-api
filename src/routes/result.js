const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const calcRoutes = require('./routes/calc');
const paymentRoutes = require('./routes/payment');
const resultRoutes = require('./routes/result2');   // ← изменено с result на result2

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/calc', calcRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/result', resultRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
