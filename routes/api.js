const router = require("express").Router(); 
const notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs"); 

router.get("/api/notes"), (req, res) => {
    res.json(notes);
}; 
router.post("/notes", (req, res) => {
    console.info(`${req.method} request received to add a note`); 
    req.body.id = uuidv4(); 
    console.log(req.body); 
    const newNote = req.body; 
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error(err); 
        } else {
            const parsedNotes = JSON.parse(data);  
            parsedNotes.push(newNote); 
            fs.writeFile("./db/db.json", JSON.stringify(parsedNotes, null, 4), (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated notes!'));
        }
    })
}); 

module.exports = router; 