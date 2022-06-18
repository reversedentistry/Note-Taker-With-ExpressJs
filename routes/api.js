const router = require("express").Router(); 
const notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
// const path = require("path");
const fs = require("fs"); 

router.get("/notes"), (req, res) => res.json(notes);

router.post("/notes", (req, res) => {
    req.body.id = uuidv4(); 
    console.log(req.body); 
    const newNote = req.body; 
    fs.readFile("../../db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err); 
        } else {
            const parsedNotes = JSON.parse(data);  
            parsedNotes.push(newNote); 
            fs.writeFileSync("../db/db.json", parsedNotes);
        }
    })
}); 

module.exports = router; 