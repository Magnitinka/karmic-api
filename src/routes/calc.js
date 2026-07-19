const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { calcIndividual, calcPair, calcProfession, calcAstromagia } = require('../services/numerology');

// Временное хранилище сессий (потом заменим на БД)
const sessions = new Map();

router.post('/individual', (req, res) => {
  const { birthDate, firstName } = req.body;
  if (!birthDate) {
    return res.status(400).json({ error: 'Дата рождения обязательна' });
  }

  const data = calcIndividual(birthDate, firstName);
  if (!data) {
    return res.status(400).json({ error: 'Ошибка в дате' });
  }

  const sessionId = uuidv4();
  sessions.set(sessionId, { data, paid: false, module: 'individual' });

  res.json({
    sessionId,
    free: {
      soulNumber: data.soulNumber,
      destinyNumber: data.destinyNumber,
      tp: data.tp,
      ja: data.ja
    },
    paidAvailable: {
      price: 990,
      paymentUrl: `/api/payment/create/${sessionId}`
    }
  });
});

// Пока заглушки для других эндпоинтов
router.post('/pair', (req, res) => {
  res.json({ message: 'Совместимость пары — в разработке' });
});

router.post('/profession', (req, res) => {
  res.json({ message: 'Профессиональная совместимость — в разработке' });
});

router.post('/astromagia', (req, res) => {
  res.json({ message: 'Астромагия — в разработке' });
});

module.exports = router;
