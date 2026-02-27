// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 3000;


// Express App

app.use((req,res,next)=>{
console.log("Hi I am 1st Middle Ware")
next()
})

app.get("/",(req,res)=>{
    res.send("Root Page")
})
app.use((req,res,next)=>{
console.log("Hi I am 2nd Middle Ware")
next()
})

app.get("/random",(req,res)=>{
    res.send("Random Page")
}) 

app.listen(port,()=>{ 
    console.log("server is listening...")
})

