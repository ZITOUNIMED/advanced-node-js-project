const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const productsRouter = require('./routes/products');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use((req, res, next) => {
    res.status(404)
    .send('<h1>Page not found.</h1>')
});
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`I'm listenning on port: ${PORT}`);
});