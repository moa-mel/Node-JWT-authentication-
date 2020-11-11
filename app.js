require('dotenv').config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const api = require("./routes");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
  app.use(cors());

  mongoose.connect("mongodb://localhost:27017/authdemo", 
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(()=>
  console.log("Database connected!"))
     .catch((err) =>
        console.error(err));

 app.get("/", (req, res)=>{
     return res.status(200).send("ok");
 });
 app.use("/api", api);

 app.listen(4000, ()=>
 console.log("Server Running on port 4000"));