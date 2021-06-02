const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/products', productsRouter);

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')
});

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`I'm listenning on port: ${PORT}`);
});