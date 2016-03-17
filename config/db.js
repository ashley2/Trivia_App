'use strict';

var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'awesome',
//   database: 'trivia'
// })

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
  if(err) {
    console.log('Error:', error);
  } else {
    console.log('connection success');
  }
});

module.exports = connection;
