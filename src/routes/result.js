const express = require('express');
const router = express.Router();

// Если нужен GET по sessionId – оставляем
router.get('/:sessionId', (req, res) => {
  res.json({ message: 'Результат пока не готов' });
});

// Основной POST – для расчёта
router.post('/', (req, res) => {
  const { name, birthdate } = req.body;
  if (!name || !birthdate) {
    return res.status(400).json({ error: 'Имя и дата обязательны' });
  }
  // Пока заглушка, но уже с нужной структурой
  res.json({
    free: {
      lifePath: { number: 1, description: 'Лидер' },
      soulUrge: { number: 2, description: 'Гармония' },
      destiny: { number: 3, description: 'Творец' }
    },
    paid: {
      karmicTasks: [
        { number: 4, description: 'Стабильность' },
        { number: 5, description: 'Приключения' }
      ],
      compatibility: { score: 80, description: 'Высокая совместимость' }
    }
  });
});

module.exports = router;
