const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3001;

const htmlRouter = require("./routes/html"); 
const apiRouter = require("./routes/api"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use("*", htmlRouter); 
app.use("/api", apiRouter); 

app.use(express.static("public")); 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);



 



 
