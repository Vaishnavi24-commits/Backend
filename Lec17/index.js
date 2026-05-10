const express = require("express")
const app= express()
const main = require("./database.js")
const User = require("./Models/user.js")
require("dotenv").config()
app.use(express.json())

app.post("/register",async(req,res)=>{
    try{
        await User.create(req.body)
        res.send("Registered Successfully")
    }
    catch(error){
        res.send("Error"+error.message)
    }
})

app.get("/info",async(req,res)=>{
    try{
       const result = await User.find()
        res.send(result)
    }
    catch(error){
        res.send("Error",error.message)
    }
})

app.get("/user/:id",async(req,res)=>{
    try{
        const result = await User.findById(req.params.id)
        res.send(result)
    }
    catch(err){
        res.send("error"+err.message)
    }
})

app.delete("/user/:id",async(req,res)=>{
    try{
   await User.findByIdAndDelete(req.params.id)
    res.send("Deleted Successfully")
    }
    catch(err){
        res.send("error",err.message)
    }
})

// {
//     "_id":"69f8dfbdb6bd983cbf444dad"
//     "age":09,
//     "emailID":"kkkkk@gmail.com",
//     "password":"345"
// }
// id alag krna padega and destruring se ho jayega


app.patch("/user",async(req,res)=>{
    try{
       const{_id, ...update}=req.body;
       console.log(req.body);
       await User.findByIdAndUpdate(_id,update,{runValidators:true})
       res.send("Updated Successfully")
       
       
    }
    catch(err){
        res.send("error"+err.message)
    }
})
main()
.then(()=>{
    console.log("Connected to DB");
    app.listen(3000,async()=>{
    console.log("Listening at port 3000");
   
})
})
