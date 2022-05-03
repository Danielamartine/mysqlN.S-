const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
    host     : 'brp83nokqxplui0jk0oy-mysql.services.clever-cloud.com',
    user     : 'uumvgsfh3md3j9jc',
    password : 'LE5uh22gY9sDthAlEu4V',
    database : 'brp83nokqxplui0jk0oy'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `Productos`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results[0].Apellido)
  });
  //connection.end()
})

app.listen(3000)

/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'brp83nokqxplui0jk0oy-mysql.services.clever-cloud.com',
  user     : 'uumvgsfh3md3j9jc',
  password : 'LE5uh22gY9sDthAlEu4V',
  database : 'brp83nokqxplui0jk0oy'
});
 
connection.connect();
 
connection.query('SELECT * FROM `Productos`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();
*/