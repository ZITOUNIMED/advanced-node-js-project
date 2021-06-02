const express = require('express');

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Product added!</h1>')
});

router.get('/', (req, res, next) => {
    res.send('<h1>New Product</h1><form method="POST" action="/add-product"><input name="ref" type="text"/><button type="submit">ADD</button></form>')
});

module.exports = router;