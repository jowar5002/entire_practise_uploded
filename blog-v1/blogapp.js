const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const chome = " home this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this is my home page .Hi this"
const cabout = "about  , this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my about us page.Hi, this is my"
const ccontact = "contact is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us page.This is my Contact us"


app.get("/", function(req, res) {
  res.render("blogejs");
});


app.listen(3000, function() {
  console.log("post is listening at 3000");
});
