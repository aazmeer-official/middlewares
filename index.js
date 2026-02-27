// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 3000;


// Express App

// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.path,req.hostname,req.time)
//     next()
// })

app.use("/random",(req,res,next)=>{
    console.log("I am only for Random")
})


app.get("/",(req,res)=>{
    res.send("Root Page")

})

app.get("/random",(req,res)=>{
    res.send("Random Page")
}) 


// 404 Error
app.use((req,res)=>{
    res.send("Page Not Found")
})

app.listen(port,()=>{ 
    console.log("server is listening...")
})

