// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let waitingArray = []
let currentArray = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(currentArray)
    
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitingArray)
    
  });


  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.post("/api/waitlist",  function(req, res) {
    var newcharacter = req.body;
    waitingArray.push(newcharacter)
    res.json(newcharacter)
    console.log(newcharacter)
    
})

  app.post("/api/tables",  function(req, res) {
    var newcharacter = req.body;
    currentArray.push(newcharacter)
    res.json(newcharacter)
    console.log(newcharacter)
    
})

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
 


  
  