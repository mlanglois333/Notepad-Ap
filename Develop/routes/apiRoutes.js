const fs = require("fs");
const path = require("path");
const express = require("express");
var app = express();
let notes = [];


function saveNotes() {

  let data = JSON.stringify(notes)

  fs.writeFile("./db/db.json", data, (err) => {
    if (err) throw err;
  });
}

function idNotes() {
  notes.forEach(function (item, i) {

    item.id = i;

  });
}

fs.readFile("./db/db.json", function (err, data) {
  if (err) throw err;
  notes = JSON.parse(data);
  idNotes();

});


module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {

    notes.push(req.body);
    idNotes();
    res.send(notes);
    saveNotes();


  });

  app.delete("/api/notes/:id", function (req, res) {

    if (notes.length === 1) {
      notes = [];
    }
    else {
      var index = req.params.id;
      notes.splice(1, index);
    }
    idNotes();
    saveNotes();
    res.send(notes);


  });

}