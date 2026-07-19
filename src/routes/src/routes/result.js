const express = require('express');
const router = express.Router();

router.get('/:sessionId', (req, res) => {
  res.json({ message: 'Результат пока не готов' });
});

module.exports = router;
