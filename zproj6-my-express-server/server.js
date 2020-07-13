const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("hello");
})

app.get("/contact", function(req, res) {
  res.send(" contact is in this no");
})

app.get("/about", function(req, res){
  res.send(" it is all about me");
})

app.get("/cv", function(req, res){
  res.send(" my cv");
})

app.listen(3000);

console.log("server started at port 3000");
