const fs = require("fs");
const path = require("path");

const dbData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(dbData);
      });

      app.post("/api/notes", function(req, res) {
       
      });

      app.post("/api/notes/:id", function(req, res) {
       
    });
        
}