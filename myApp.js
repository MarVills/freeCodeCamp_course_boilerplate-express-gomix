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



const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

app.get("/:word/echo", (req, res) => {
  // const { word } = req.params;
  res.json({
    echo: req.params.word
  });
});

// app.get("/name", function(req, res) {
//   // var firstName = req.query.first;
//   // var lastName = req.query.last;
//   // OR you can destructure and rename the keys
//   // var { first: firstName, last: lastName } = req.query;
//   // Use template literals to form a formatted string
//   res.json({
//     name: req.query.first + " " + req.query.last
//   });
// });





























 module.exports = app;
