const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
/* port on server */
const port = process.env.PORT || 5000;

/* middleWare */

/* routes */
app.get("/", (req , res)=>{
    res.send("hello bangladesh")
})
/*  error handle */

/* listening server */
app.listen(port, () => {
  console.log("server is run on 500");
});
