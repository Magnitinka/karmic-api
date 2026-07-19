const express = require('express');
const router = express.Router();

// ВРЕМЕННАЯ ЗАГЛУШКА (потом заменишь на реальные модули)
// Если у тебя уже есть numerology.js и expansions.json – раскомментируй строки ниже
// const numerology = require('../services/numerology');
// const expansions = require('../data/expansions.json');

// Заглушка для теста (имитация данных)
const mockNumerology = {
  calculateBasic: (name, birthdate) => ({ lifePath: 1, soulUrge: 2, destiny: 3 }),
  calculateAdvanced: (name, birthdate, partnerName, partnerBirthdate) => ({
    karmicTasks: [{ number: 4 }, { number: 5 }],
    compatibility: { score: 80 }
  })
};

const mockExpansions = {
  lifePath: { "1": "Лидер", "2": "Дипломат", "3": "Творец" },
  soulUrge: { "1": "Независимость", "2": "Гармония" },
  destiny: { "1": "Достижения", "2": "Сотрудничество" },
  karmicTasks: { "4": "Стабильность", "5": "Приключения" },
  compatibility: { "80": "Высокая совместимость" }
};

// Используем заглушки, пока нет реальных файлов
const numerology = mockNumerology;
const expansions = mockExpansions;

// GET – для проверки (можно удалить, если не нужно)
router.get('/', (req, res) => {
  res.json({ message: 'API готов к POST-запросам' });
});

// POST – основной эндпоинт
router.post('/', (req, res) => {
  const { name, birthdate, partnerName, partnerBirthdate } = req.body;

  if (!name || !birthdate) {
    return res.status(400).json({ error: 'Имя и дата рождения обязательны' });
  }

  // 1. Базовый расчёт (бесплатная часть)
  const basic = numerology.calculateBasic(name, birthdate);
  const freeResult = {
    lifePath: {
      number: basic.lifePath,
      description: expansions.lifePath[basic.lifePath] || 'Описание отсутствует'
    },
    soulUrge: {
      number: basic.soulUrge,
      description: expansions.soulUrge[basic.soulUrge] || 'Описание отсутствует'
    },
    destiny: {
      number: basic.destiny,
      description: expansions.destiny[basic.destiny] || 'Описание отсутствует'
    }
  };

  // 2. Платная часть (дополнительные расчёты)
  const advanced = numerology.calculateAdvanced(name, birthdate, partnerName, partnerBirthdate);
  const paidResult = {
    karmicTasks: advanced.karmicTasks.map(task => ({
      number: task.number,
      description: expansions.karmicTasks[task.number] || 'Описание отсутствует'
    })),
    compatibility: advanced.compatibility ? {
      score: advanced.compatibility.score,
      description: expansions.compatibility[advanced.compatibility.score] || 'Описание отсутствует'
    } : null
  };

  // 3. Отправляем ответ
  res.json({ free: freeResult, paid: paidResult });
});

module.exports = router;
