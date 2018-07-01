const mongoClient = require("mongodb").MongoClient

// mongodb:usuario:senha@servidor:porta/banco
//const new = false, edit = false, delete = false;

mongoClient.connect("mongodb://localhost:27017/workshop")
    .then(conn => global.conn = conn.db("workshop"))
    .catch(err => console.log(err))

function findCustomers(callback) {
    global.conn.collection('customers').find().toArray(callback)
}

module.exports = {findCustomers} 
