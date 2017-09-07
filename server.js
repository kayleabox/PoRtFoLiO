var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/home", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

// Initiate the listener.
app.listen(process.env.PORT || 8080, function() {
  console.log("App running!");
});
