const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const userAuth = async (req,res,next)=>{
      try{
           const {token} = req.cookies
           if(!token){
            throw new Error("Token Doesn`t exist")
           }
    
           const payload =  jwt.verify(token,"Vaishnavi@1234")
           const {_id}=payload;
           if(!_id){
            throw new Error("ID is missing")
           }
            const result = await User.findById(payload._id)
            if(!result){
                throw new Error("User doesn't Exist")
            }
           req.user=result
            next()
        }
        catch(err){
            res.send("error"+err.message)
        }
    }

    module.exports=userAuth