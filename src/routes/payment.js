const express = require('express');
const router = express.Router();

router.post('/create/:sessionId', (req, res) => {
  res.json({ paymentUrl: 'https://yoomoney.ru/pay' });
});

module.exports = router;
