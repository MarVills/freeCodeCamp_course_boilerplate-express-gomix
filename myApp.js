let express = require('express');
let app = express();
// console.log("Hello World");

absolutePath =  __dirname + "/views/index.html";


// app.get("/", function(express, app) {
//   app.sendFile(absolutePath);
// });
// app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (express, app) => {
  app.json({
    message: "Hello json"
  });
});






























 module.exports = app;
