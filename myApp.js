let express = require('express');
let app = express();
require('dotenv').config();
// console.log("Hello World");

// absolutePath =  __dirname + "/views/index.html";


// app.get("/", function(express, app) {
//   app.sendFile(absolutePath);
// });
// app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
 console.log("log"process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
  // response = "Hello World".toUpperCase();
     res.json(
       {"message": "HELLO JSON"}
  )
} else {
  // response = "Hello World";
     res.json(
        {"message": "Hello json"}
  )
}
});






























 module.exports = app;
