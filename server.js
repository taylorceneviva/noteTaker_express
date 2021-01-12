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
app.use(express.static("public"));

const fs = require("fs");

// HTML routes
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


    // GET
    app.get(`/api/notes`, function (req, res) {
        
    
    });

    app.get(`/api/notes/:id`, function (req, res) {

        

    });

    // POST
    app.post(`/api/notes`, function (req, res) {

      var newNote = req.body;


    });

    //  DELETE
    app.delete(`/api/notes/:id`, function (req, res) {
        res.send('Got a DELETE request at /user')
    });



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });