const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'exapp_user',
  password : 'exapp',
  database : 'exapp_db'
});

app.get('/', (req, res) => {
  connection.query('select * from exapp_table', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
