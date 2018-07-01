
//global.db = require('./db')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3010;   //porta padrão
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true}));
(app.use(bodyParser.json));

// definindo rotas
const router = express.Router()
router.get('/', (req,res) => res.json({ message: 'API Bíblia com Node funcionando!!'}));
app.use('/',router)

// // GET /clientes
router.get('/versiculos', (req,res) => {
    execSQLQuery('SELECT * FROM verses LIMIT 100', res);
})

function execSQLQuery(sqlQry, res){ 
    // Add the credentials to access your database
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'bibliano_biblianoar'  
    });

    //'bibliano_biblianoar'

    // connect to mysql
    connection.query(sqlQry, function(error, results, fields){
        // in case of error
        if(error) 
            res.json(results);
        else
            res.json(results);

        connection.end();
        // console.log('executou!');
    });
}

//inicia o servidor
app.listen(port)
console.log('API Bíblia com Node funcionando!')