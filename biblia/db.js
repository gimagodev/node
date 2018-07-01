
// Get the mysql service
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3010; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Add the credentials to access your database
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bibliano_biblianoar'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err) return console.log(err);
    console.log('conectou!');
});

// // Perform a query
// // $query = 'SELECT * from MyTable LIMIT 10';

// function listaVersiculos(callback) {
//     $query = 'SELECT * from verses LIMIT 10';
//     connection.query($query, function(err, rows, fields) {
//         if(err){
//             console.log("An error ocurred performing the query.");
//             return;
//         }
    
//         console.log("Query succesfully executed: ", rows);
//     });
// }

//  module.exports = {listaVersiculos} 
