const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET работает' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST работает', data: req.body });
});

module.exports = router;
