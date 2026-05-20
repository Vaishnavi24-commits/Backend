const express = require("express")
const app= express()
const main = require("./database.js")
const User = require("./Models/user.js")
const validateUser = require("./utils/validateuser.js")
const bcrypt = require("bcrypt")
const cookieParser=require('cookie-parser')
const jwt = require('jsonwebtoken');
require("dotenv").config()
const userAuth = require("./middleware/userAuth.js")

app.use(express.json())
app.use(cookieParser())

app.post("/register",async(req,res)=>{
    try{
        validateUser(req.body)
        req.body.password = await bcrypt.hash(req.body.password,10)
        await User.create(req.body)
        res.send("Registered Successfully")
    }
    catch(error){
        res.send("Error"+error.message)
    }
})

app.post("/login",async(req,res)=>{
    try{
        const user = await User.findById(req.body._id)
        if(!(req.body.emailId==user.emailId)){
            throw new Error("Invalid Credentials")
        }
        const IsAllowed = await bcrypt.compare(req.body.password,user.password)
        if(!(IsAllowed)){
            throw new Error("Invalid Credentials")
        }
        //JWT Token
        const token=jwt.sign({_id:user._id,emailId:user.emailId},"Vaishnavi@1234")
        res.cookie("token",token)
        res.send("Login Successfully")
    }
    catch(error){
        res.send("Error:"+error.message)
    }
})

app.get("/info",async(req,res)=>{
    try{
        //validate the user first
       const payload =  jwt.verify(req.cookies.token,"Vaishnavi@1234")
       console.log(payload);
       
       const result = await User.find()
       console.log(req.cookies);
       
        res.send(result)
    }
    catch(error){
        res.send("Error",error.message)
    }
})

app.get("/user",userAuth, async(req,res)=>{
     try{
        res.send(result)
    }
    catch(err){
        res.send("error"+err.message)
    }
})

app.delete("/user/:id",userAuth,async(req,res)=>{
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


app.patch("/user",userAuth,async(req,res)=>{
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
