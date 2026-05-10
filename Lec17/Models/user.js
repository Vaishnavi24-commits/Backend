const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
const { Schema } = mongoose;

 const userschema = new Schema({
    firstName:{
     type: String,
     required:true,
     minLength:3,
     maxLength:20
    },
    lastName:{
     type: String
    },
    age:{
     type: Number,
     min:18,
     max:60,
     required:true
    },
    gender:{
     type: String,
    //  enum:["male","female","others"]
    validate(value){
      if(!["male","female","others"].includes(value))
        throw new Error("Invalid Gender")
    }
    },
    emailId:{
     type: String,
     required:true,
     unique:true,
     trim:true,
     immutable:true,
    },
    password:{
     type: String
    },
    photo:{
      type:String
    }
  },{timestamps:true})
 
  const User = mongoose.model("user",userschema)
  module.exports=User