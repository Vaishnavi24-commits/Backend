const express = require ("express")
const app = express()
const {Auth} = require("./middleware/auth")
app.use(express.json())
const foodItems = [                                                                                           
    {id:1,food:"pizza",category:"veg",price:400},
    {id:2,food:"pasta",category:"veg",price:800},
    {id:3,food:"popcorn",category:"veg",price:700},
   { id:4,food:"Chai",category:"veg",price:900},
    {id:5,food:"Coffee",category:"non veg",price:200},
    {id:6,food:"Burger",category:"veg",price:300},
    {id:7,food:"Coke",category:"veg",price:500},
    {id:8,food:"shake",category:"veg",price:600},
    {id:9,food:"Ice cream",category:" non veg",price:700},
    {id:10,food:"Cold Drink",category:"non veg",price:800},
    {id:11,food:"waffle",category:"veg",price:400},
    {id:12,food:"Bread",category:"non veg",price:400},
    {id:13,food:"Fries",category:"veg",price:400},
]
const Addtocart = [];
app.get("/food",(req,res)=>{
    res.status(200).send(foodItems)
})
app.use("/admin",Auth)

app.post("/admin",(req,res)=>{
    

    
        foodItems.push(req.body)
        res.status(201).send("Item Added successfully")
    
    // else{
    //     res.status(202).send("Items cant be added")
    // }
})
app.delete("/admin/:id",(req,res)=>{
    
    
        const id = parseInt(req.params.id)
        const index = foodItems.findIndex(item=>item.id===id)

        if(index===-1){
            res.send("Item doesnt exist")
        }
        else{
            foodItems.splice(index,1)
            res.send("Successfully deleted")
        }
    
    // else{
    //     res.status(403).send("No Permission")
    // }
})
app.patch("/admin",(req,res)=>{
    
    
        const id = req.body.id
        const fooddata = foodItems.find(item=>item.id===id)

        if(fooddata){
            if(req.body.food)
                fooddata.food=req.body.food

            if(req.body.category)
                fooddata.category=req.body.category

            if(req.body.price)
                fooddata.price=req.body.price
            res.send("Successfully updated")
        }
        else{
            res.send("Item not exist")
        }
    
    // else{
    //     res.status(403).send("No permissionn")
    // }
})
app.post("/users/:id",(req,res)=>{
    
    const id = parseInt(req.params.id)
    const foodItem = foodItems.find(item=>item.id===id)

    if(foodItem){
        Addtocart.push(foodItem)
        res.status(200).send("Item added successfully")
    }
    else{
        res.send("Item out of stock")
    }
}
)
app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = Addtocart.findIndex(item=>item.id===id)
    if(index==-1){
        res.send("No item in the cart")
    }
    else{
        Addtocart.splice(index,1)
        res.send("Item removed successfully")
    }
})
app.get("/users",(req,res)=>{
    res.send(Addtocart)
})
app.listen(3000,()=>{
    console.log("I m listening at port 3000");
    
})