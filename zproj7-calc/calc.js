const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/calc.html");
})

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The rsult of the calculation is"+ result);

   //res.send("Thanks for posting");
   console.log(result);
});
app.listen(3000);

console.log("server is starting at port 3000");
