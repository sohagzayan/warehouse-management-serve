const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const inventoryRoute = require("./routes/inventoryRoute")
const mongoConnection = require("./connection/connection")
dotenv.config();
/* port on server */
const port = process.env.PORT || 5000;
/* mongoDB connection */
mongoConnection()
/* middleWare */
app.use(bodyParser.json())
app.use('/api/todo', inventoryRoute)

app.get("/", (req , res)=>{
    res.send("deploy success you can go next step")
})

/* listening server */
app.listen(port, () => {
  console.log("server is run on 500");
});
