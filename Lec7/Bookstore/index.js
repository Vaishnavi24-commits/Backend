const express = require ("express")
const app = express();
const bookstore=[
    {id:1,name:"harrypotter",author:"harry"},
    {id:2,name:"friends",author:"yahhi"},
    {id:3,name:"Ikigai",author:"konichiwa"},
    {id:4,name:"potterhead",author:"harry"},
]
app.use(express.json())
 app.get("/book",(req,res)=>{
    console.log(req.query);
    const book = bookstore.filter(info=>info.author===req.query.author)
    
     res.send(book);
 })

app.get("/book/:id",(req,res)=>{
    const id = parseInt( req.params.id)
    const book = bookstore.find(info=>info.id===id)
    
    res.send(book)
})
app.post("/book",(req,res)=>{
    bookstore.push(req.body)
    res.send("Data saved succesfully")
})
app.patch("/book",(req,res)=>{
    console.log(req.body);
    const Book = bookstore.find(info=>info.id===req.body.id)
    if(req.body.name)
    Book.name = req.body.name
    if(req.body.author)
    Book.author = req.body.author
    
    res.send("Patch")
})

app.put("/book",(req,res)=>{
    const book = bookstore.find(info=>info.id===req.body.id)
    book.name=req.body.name
    book.author=req.body.author
    res.send("Changes updated successfully")
})
app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = bookstore.findIndex(info=>info.id===id)
    bookstore.splice(index,1)
    res.send("Deleted Successfully")

})
app.listen(5000,()=>{
    console.log("I m listening a 5000");
    
})