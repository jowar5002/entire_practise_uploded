const express = require("express");
const bodyParser = require("body-parser");
// var _ = require('lodash');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var countryFrom, countryTo;

app.get("/", function(req, res) {
  res.render("index")
});

app.post("/content", function(req, res) {

  countryFrom = req.body.countries;
  countryTo = req.body.countriesTo;
  console.log(countryFrom, countryTo);
  res.redirect("content")

});


app.get("/content", function(req, res) {
  // res.render("content");
  res.render("content", {
    cFrom: countryFrom,
    cTo: countryTo,
  });
});

app.listen(4000, function() {
  console.log("post is listening at 4000");
});
