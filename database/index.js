var mysql = require('mysql');
var mypw = require('../mypw.js');

var connection = mysql.createConnection({
  host     : 'admin.cmd4su8z0tlg.us-west-1.rds.amazonaws.com',
  user     : 'admin',
  password : mypw,
  port     : '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();

module.exports = connection;