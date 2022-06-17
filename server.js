const express = require("express"); 
const app = express(); 

const htmlRouter = require("./routes/html"); 
const apiRouter = require("./routes/api"); 

app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use("*", htmlRouter); 
app.use("/api", apiRouter); 


 



 
