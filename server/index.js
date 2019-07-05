const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
// const connection = require('../database');
const port = 3000;
// const scraper = require('../scraped-imgs/index.js');


app.listen(port, ()=> console.log(`Listening to port ${port}`))