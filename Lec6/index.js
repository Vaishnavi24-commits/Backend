const express = require("express")
const app = express()


app.get("/abou?t", (req, res) => {
  res.send("Hello Miss Vaishnavi")
})

// app.use("/contact",(req,res)=>{
//     res.send("I am your contact page")
// })
// app.use("/detail",(req,res)=>{
//     res.send("I am your detail page")
// })
// app.use("/",(req,res)=>{
//     res.send("I am Home page")
// })
app.listen(4000,()=>{
    console.log("Im Listening at port 4000");
    
})