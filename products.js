const express = require('express');
const router = express.Router();
const verifyToken = require('./middleware/authMiddleware');

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 599 },
  { id: 3, name: 'Headphones', price: 199 },
];

router.get('/', verifyToken, (req, res) => {
  res.json(products);
});

module.exports = router;