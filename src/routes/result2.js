const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'POST работает', data: req.body });
});

module.exports = router;
