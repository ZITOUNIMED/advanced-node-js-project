const express = require('express');
const path = require('path');

const rootDir = require('../utils/root-dir');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Product added!</h1>')
});

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'products.html'));
});


module.exports = router;