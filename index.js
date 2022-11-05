const express = require("express");
const { json } = require("express");

const flight = require('./routes/flightRoute.js');

const app = express();
app.use(json());


app.use("/flights", flight)

app.get("/", (req, res) =>{
  res.send("Jane is building flight App");
})


const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
