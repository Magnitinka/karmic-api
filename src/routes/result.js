const express = require('express');
const router = express.Router();

// ========== ВРЕМЕННАЯ ЗАГЛУШКА (потом заменишь) ==========
// Эти данные будут возвращаться, пока не подключишь numerology.js и expansions.json
const mockData = {
  free: {
    lifePath: { number: 1, description: 'Лидер, независимость, первопроходец' },
    soulUrge: { number: 2, description: 'Дипломат, сотрудничество, гармония' },
    destiny: { number: 3, description: 'Творец, общение, оптимизм' }
  },
  paid: {
    karmicTasks: [
      { number: 4, description: 'Стабильность, порядок, труд' },
      { number: 5, description: 'Приключения, свобода, перемены' }
    ],
    compatibility: { score: 80, description: 'Высокая совместимость, взаимопонимание' }
  }
};

// ========== GET – для проверки (можно удалить) ==========
router.get('/', (req, res) => {
  res.json({ message: 'API готов к POST-запросам. Отправьте имя и дату рождения.' });
});

// ========== POST – основной эндпоинт ==========
router.post('/', (req, res) => {
  const { name, birthdate, partnerName, partnerBirthdate } = req.body;

  // Проверяем обязательные поля
  if (!name || !birthdate) {
    return res.status(400).json({ error: 'Имя и дата рождения обязательны' });
  }

  // Здесь ты позже подключишь реальные модули:
  // const numerology = require('../services/numerology');
  // const expansions = require('../data/expansions.json');
  // const basic = numerology.calculateBasic(name, birthdate);
  // const advanced = numerology.calculateAdvanced(name, birthdate, partnerName, partnerBirthdate);
  // и тогда вернёшь реальные данные вместо mockData

  // Пока возвращаем заглушку
  res.json(mockData);
});

module.exports = router;
