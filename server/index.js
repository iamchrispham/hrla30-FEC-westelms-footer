const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const connection = require('../database/index.js');
const port = 3000;


app.listen(port, ()=> console.log(`Listening to port ${port}`))