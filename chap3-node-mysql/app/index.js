var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'exapp_user',
  password : 'exapp',
  database : 'exapp_db'
});

app.get('/', function (req, res) {
  connection.query('select * from exapp_table', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
