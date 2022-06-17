const express = require("express"); 
const path = require("path");
const notes = require("./db/db.json"); 

const app = express(); 

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get("/api/notes"), (req, res) => res.json(notes); 
