// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
let PORT = process.env.PORT || 3000;

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

      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log("db", data);

        var db = JSON.parse(data);
  
        db.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
          if (err) throw err;
         
      });

      res.json(newNote);
    });

  });

    //  DELETE
    app.delete(`/api/notes/:id`, function (req, res) {
      var removeId = req.params.id;
      removeId.id = uuidv4()
      var removeId = removeId.filter(function() {
        if (removeId =! null )
         return true
        else {
          return false
        }
    });

      fs.readFile("db/db.json", "utf8", function(err) {
        var data = JSON.parse(data);
      });

           fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
            if (err) throw err;
           
        });

        res.end(console.log("working"))
      });
  



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });