const express = require ("express")
const app = express()

//Route handler 
app.use("/user",[(req,res,next)=>{
    console.log("first");
    
   // res.send("Hello")
    next();
},
(req,res,next)=>{
    console.log("second");
    //res.send("Hello im fine")
    next()
    
},
(req,res,next)=>{
    console.log("Third");
    //res.send("I M miss vaishnavi")
    next()
    
    
},
(req,res,next)=>{
    console.log("Fourth");
    res.send("I am foodie")
    
}
])   //at last res send hoga im foodie baki beech ki cheeze n sab kuch middleware h

app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`)
    next()

})
app.use("/user",(req,res)=>{
    
    res.send("Info about user")
})
app.post("/user",(req,res)=>{
    
    res.send("Info saved")
})

app.listen(3000,()=>{
    
    console.log("Im Listening at port 3000 ");
    
})