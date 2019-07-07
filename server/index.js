const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const connection = require('../database');
const db = require('../database/dbHelpers');

const port = 3000;
// const scraper = require('../scraped-imgs/index.js');
// https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1553529613-westelm-paidge-chair-and-a-half-sleeper-1553529608.jpg

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
/* ROW DATA
[ 'dataValues',
  '_previousDataValues',
  '_changed',
  '_modelOptions',
  '_options',
  'isNewRecord' ]
*/

// console.log(`***ROW ${i}*** `, row['dataValues']['url']); to reference a property in a row of data
app.get('/products-cp/', (req, res) => {
	db.getChairs()
		.then((data) => {
			res.status(200).send(JSON.stringify(data)); // works, but fewer lines of code just stringifying the data.  higher level fct.
		})
		.catch( (err) => {
			console.error(err);
			res.status(404).send('Error retrieving data.');
		});
})

app.get('/products-cp/:id', (req, res) => { // grab by ID
	var { id } = req.params;
	console.log(`/products-cp/${id}`, JSON.stringify(id));
	db.getChairByID(id)
		.then((data) => {
			console.log('GET BY ID: ', data)
			res.status(200).send(JSON.stringify(data));
		})
	.catch( (err) => {
		console.error(err);
		res.status(404).send('Error retrieving data.');
	});
})

app.listen(port, () => console.log(`Listening to port ${port}`))