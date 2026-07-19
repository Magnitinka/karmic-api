const express = require('express');
const router = express.Router();

// Временное хранилище сессий (потом заменим на БД)
const sessions = new Map();

router.get('/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const session = sessions.get(sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Сессия не найдена' });
  }
  
  if (!session.paid) {
    return res.status(403).json({ error: 'Доступ запрещён. Расшифровка не оплачена.' });
  }
  
  // Заглушка — позже здесь будет полный результат
  res.json({
    sessionId,
    paid: true,
    data: {
      message: 'Полная расшифровка будет здесь после оплаты.',
      // Здесь будут все данные
    }
  });
});

module.exports = router;
