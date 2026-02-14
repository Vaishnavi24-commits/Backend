const express = require("express")
const app = express()

// app.use("/user",(req,res)=>{
//     res.send({name:"Rohit"})
// })

app.use(express.json())
app.get("/user",(req,res)=>{
    res.send({name:"Rohit"})
})
app.post("/user",(req,res)=>{
    console.log("Data saved successfully");
    
    res.send("Data saved successfully");
    console.log(req.body);
    
})

app.listen(4000,()=>{ 
    console.log("I m listening");
    
})