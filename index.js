
const express = require("express");
const {v4: uuid} = require('uuid');
const { json }= require("express");

const flight = require('./routes/flightRoute.js');

const app = express();
app.use(json());

app.use("/Flight", flight);




app.get("/", (req, res)=>{
    res.send("working on a project");
 
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`serving on port ${PORT}`));
