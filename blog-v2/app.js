const express = require("express");
const bodyParser = require("body-parser");
var _ = require('lodash');
// var lodashLC = require('lodash/core');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");


let gdata = [];

const chome = "Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page.Home , this is my first home page."
const cabout = "About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us.About us , This is my first about us."
const ccontact = "Contact me page , This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my contact us page. This is my."


app.get("/", function(req, res) {
  res.render("home", {
    hometext: chome,
    gdata: gdata
  });

});

app.get("/about", function(req, res) {
  res.render("about.ejs", {
    hometext: cabout,
  });
});

app.get("/contact", function(req, res) {
  res.render("contact.ejs", {
    hometext: ccontact,
  });
});

app.get("/compose", function(req, res) {
  res.render("compose.ejs");
});

let ptitle = "";
let pcontent = "";

app.post("/", function(req, res) {

  // var text = req.body.postBody;
  // var count = 100;
  // var str = text.slice(0, count) + (text.length > count ? "..." : "");
 
  const post = {
    ptitle: req.body.postTitle,
    pcontent: req.body.postBody,
    // pcontent: str,
  }
  gdata.push(post);
  res.redirect("/");
});

app.get("/gdata/:postName", function(req, res) {
  var requestedLink = req.params.postName;
  requestedLink = _.kebabCase(requestedLink);

  gdata.forEach(function(gdatasingle) {

    var storedTitle = gdatasingle.ptitle;
    storedTitle = _.kebabCase(storedTitle);

    if (storedTitle === requestedLink) {

      // var text = gdatasingle.pcontent;
      // var count = 35;
      // var str = text.slice(0, count) + (text.length > count ? "..." : "");


      // if (str.length > 50) {
      //   str = str.substring(0, 50);
      // };

      res.render("gdatasingle", {
        ptitle: gdatasingle.ptitle,
        pcontent: gdatasingle.pcontent
      });



    } else {
      // console.log("no Match");
    }
  });
});



app.listen(4000, function() {
  console.log("post is listening at 4000");
});
