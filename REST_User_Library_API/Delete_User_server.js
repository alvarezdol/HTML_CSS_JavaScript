//Delete User API - from: https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
//User is hard coded here - change to read from - file - web form data - passed into variable?
//In browser: http://127.0.0.1:8081/deleteUser

var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})