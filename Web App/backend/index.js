var express = require('express');
//var mysql = require('mysql')
var app = express();
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Hafeel@123",
//     database: "bankapp",
//     //connectionLimit: 10
// });

// connection.connect(function(error){
//     if (error) {
//         return console.log(error);
//     }
//     return console.log(result);
// });
const config = require("./knexfile.js");
const db = require("knex")(config.development)
const customerroute = require("./routes/customer")
app.use('/customers',customerroute)
// app.get('/customers',function(req,res){
//     // db.raw("SELECT * FROM customer").then(function(result){
//     //     return res.send({data : result[0]})
//     });
// });

console.log("APp listening on : http://localhost:5000");
app.listen(5000);


