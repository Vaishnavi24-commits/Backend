const mongoose = require('mongoose');
const { Schema } = mongoose;

 const userschema = new Schema({
    name:String,
    age:Number,
    gender:String,
    city:String
  })
  const User = mongoose.model("user",userschema)
  module.exports=User