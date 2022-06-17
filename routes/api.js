const router = require("express").Router(); 
const notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
// const path = require("path");

router.get("/notes"), (req, res) => res.json(notes);

router.post("/notes", (req, res) => {
    req.body.id = uuidv4(); 
}); 

module.exports = router; 