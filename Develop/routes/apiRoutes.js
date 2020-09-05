const fs = require("fs");
const path = require("path");
const express = require("express");
var app = express();
let notes = [];


function saveNotes(){

  let data = JSON.stringify(notes)

  fs.writeFile("../Develop/db/db.json", data, (err) => {
    if (err) throw err;
  });
}

function idNotes() {
  notes.forEach(function(item, i) {
    
    item.id = i;

  });
}

fs.readFile("../Develop/db/db.json", function( err, data){
  if (err) throw err;
  notes = JSON.parse(data);
  idNotes();
  console.log(notes);
  });
  
 
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notes);
      });

      app.post("/api/notes", function(req, res) {

        notes.push(req.body);
        idNotes();
        res.json(notes);
        saveNotes();
        console.log(notes);
       
      });

      app.post("/api/notes/:id", function(req, res) {

        notes.splice(1, req);
        idNotes();
        saveNotes();
        res.json(notes);
       
        console.log("id post!")
    });
        
}