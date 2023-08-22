const express = require('express');
const app = express();
const port = 2000;
const products = require('./products.json');

app.get('/', (req, res) => {
    res.send('Go to the products page');
})

app.get('/products', (req, res)=>{
    res.send(products)
})

app.get('/products/:id', (req, res)=> {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server Successfully Response Port ${port}`);
})