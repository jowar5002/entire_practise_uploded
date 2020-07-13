const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // console.log(" post req received");
  // console.log(req.body.cityName);
  const query = req.body.cityName;


  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=ef819c24519c643ac89f76a8ca081edd&units=metric";


  https.get(url, function(response) {




    response.on('data', function(data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      // console.log(JSON.stringify(weatherData));
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The temparater is " + temp + " degree C</p>" );
      res.write("<p>The description in Kolkata weather is " + description + "<p>");
      res.write("<p><img src = " + iconurl + "><p>");

      res.send();
      // console.log(temp);
    });
  });
  // res.send("server is up and running")
});




app.listen(3000, function(req, res) {
  console.log("server is running in port 3000");
})
