const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const connection = require('../database');
const dbHelpers = require('../database/dbHelpers');

const port = 3000;
// const scraper = require('../scraped-imgs/index.js');
// https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1553529613-westelm-paidge-chair-and-a-half-sleeper-1553529608.jpg


app.get('/products-cp/', (req, res)=>{
	res.status(200).send('GET SUCCESS');
})

app.get('/products-cp/:product_name', (req, res)=>{
	res.status(200).send('GET SUCCESS');
})

app.listen(port, ()=> console.log(`Listening to port ${port}`))