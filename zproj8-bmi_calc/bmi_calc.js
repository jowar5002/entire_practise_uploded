const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmi_calc.html")
  console.log(" app get working");
});

app.post("/", function(req, res){

console.log(req.body);

var bmi1 = Number(req.body.bmi1);
var bmi2 = Number(req.body.bmi2);

var result = bmi1 * bmi2 ;

res.send("the BMI is " + result);

console.log(result);

});

app.listen(4000);

console.log("post is listening at 4000");
