const express = require('express');
const router = express.Router();

// GET – для проверки
router.get('/', (req, res) => {
    res.json({ message: 'Результат пока не готов' });
});

// POST – основной для калькулятора
router.post('/', (req, res) => {
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
