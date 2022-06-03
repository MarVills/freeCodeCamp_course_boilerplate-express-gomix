let express = require('express');
let app = express();
// console.log("Hello World");

absolutePath =  __dirname + "/views/index.html";


app.get("/", function(express, app) {
  app.sendFile(absolutePath);
});


































 module.exports = app;
