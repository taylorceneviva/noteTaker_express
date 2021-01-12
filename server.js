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
var { v4: uuidv4 } = require("uuid");

// HTML routes
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


    // GET
    app.get(`/api/notes`, function (req, res) {
      fs.readFile("db/db.json", "utf8", function(error,data) {
        res.json(JSON.parse(data));
      });

  });

    // POST
    app.post(`/api/notes`, function (req, res) {

      var newNote = req.body;

      newNote.id = uuidv4()

      fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        var JSON = JSON.parse(data);
      });
      
        JSON.push(newNote);

        fs.writeFile("./db/db.json", json, (err) => {
          if (err) throw err;
          console.log("anything")
      });

      res.json(newNote);
    });

    //  DELETE
    app.delete(`/api/notes/:id`, function (req, res) {
        res.send('Got a DELETE request at /user')
    });



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });