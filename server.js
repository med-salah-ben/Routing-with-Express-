const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

let isOpen = new Date().getHours();

app.get("/public/home.html", (req, res) => {
  if (isOpen < 8 || isOpen > 17)
    res.send("<h1>Our office is not open now</h1>");
  else res.sendFile(__dirname + "/public/home.html");
});

app.get("/public/contact.html", (req, res) => {
  if (isOpen < 8 || isOpen > 17)
    res.send("<h1>Our office is not open now</h1>");
  else res.sendFile(__dirname + "/public/contact.html");
});

app.get("/public/ourservices.html", (req, res) => {
  if (isOpen < 8 || isOpen > 17)
    res.send("<h1>Our office is not open now</h1>");
  else res.sendFile(__dirname + "/public/ourservices.html");
});

app.listen(4000, (err) => {
  if (err) console.log("server is not connected");
  else console.log("server is connected");
});
