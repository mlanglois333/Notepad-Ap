const fs = require("fs");
const path = require("path");

const dbData = require("../db/db.json");

module.exports = function(app) {

    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};