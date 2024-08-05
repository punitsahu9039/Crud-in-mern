const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
var bodyParser = require('body-parser')
const proRoute=require("./Routes/productroute")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//mongodb://localhost:27017/

mongoose.connect("mongodb://127.0.0.1:27017/mypractice").then(()=>{
    console.log("Database Connected")
})
app.use(proRoute);


app.listen(8500,()=>{
    console.log("Server is running")
})