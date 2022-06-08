let express = require('express');
let app = express();
require('dotenv').config();
// console.log("Hello World");

app.use(function(req, res, next){
  console.log(req.method +" "+ req.path +" - "+ req.ip );
  next();
});


// absolutePath =  __dirname + "/views/index.html";
// app.get("/", function(express, app) {
//   app.sendFile(absolutePath);
// });
// app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  const mySecret = process.env['MESSAGE_STYLE'];
  var jsonResponse = {"message": "Hello json"};
  var message = jsonResponse.message.toString();
  
  if (mySecret === "uppercase") {
    jsonResponse.message = message.toUpperCase();
    // message = message.toUpperCase()
    // console.log(jsonResponse.message);
  }
  res.json(jsonResponse);

});






























 module.exports = app;
