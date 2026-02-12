
const http = require('http')
const server = http.createServer((req,res)=>{
    
    if(req.url==="/"){
        res.end("Hello")
    }   
    else if(req.url==="/contact"){
        res.end("This is a contact page")
    }
    else if(req.url==="/about"){
        res.end("This is a about page")
    }
    else{
        res.end("Error:Page not found")
    }
})

server.listen(4000,()=>{
    console.log("Im Listening");
    
})