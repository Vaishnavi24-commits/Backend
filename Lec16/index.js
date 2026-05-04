const express = require("express")
const app= express()
const main = require("./database.js")
const User = require("./Models/user.js")

app.use(express.json())

app.get("/info",async(req,res)=>{
   const ans =  await User.find({})
   res.send(ans)
})
app.post("/info",async(req,res)=>{
    //Method1
    // const ans = new User(req.body)
    // await ans.save()
    //Method2
    try{
    await User.create(req.body)
    res.send("SuccessFully Updated!")
    }
    catch(err){
        res.send(err)
    }
})

app.delete("/info",async(req,res)=>{
   await User.deleteOne({name:"vaish"})
    res.send("Succesfully Deleted")
})


//UPDATE ONE VALUE
app.put("/info",async(req,res)=>{
    const result = await User.updateOne({name:"Vaishnavi"},{age:20})
    res.send("Updated Successfully")
})

main()
.then(()=>{
    console.log("Connected to DB");
    app.listen(3000,async()=>{
    console.log("Listening at port 3000");


   const ans = await User.find({name:"Rohit"})
   console.log(ans);
  

    
})
})
.catch((err)=>console.log(err));