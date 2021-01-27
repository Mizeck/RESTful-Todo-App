const express = require("express");
const cors = require("cors");
require('dotenv').config(); 
const port = process.env.Port;
const app = express();
app.use(cors());
app.use(express.json());


//Components from the routes
const routes = require("./routes/todolist");
app.use("/todo", routes);

app.listen(port, ()=> console.log(`Server runnning on Port: ${port}`));