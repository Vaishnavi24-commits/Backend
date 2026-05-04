const mongoose = require('mongoose');
//const { Schema } = mongoose;

async function main() {
  //connecting to a database
  await mongoose.connect("mongodb+srv://MISSVAISHNAVI:Vaishnavi%40240920055@learningmongo.lj45b5u.mongodb.net/Bookstore")
//making user schema
  // const userschema = new Schema({
  //   name:String,
  //   age:Number,
  //   gender:String,
  //   city:String
  // })
  //making a model(its a table in the database)
  // const User = mongoose.model("user",userschema)
  
  // //creating a document or  object Method1
  // const user1= new User ({name:'Rohit',age:20,city:'dwarka',gender:'Male'})
  // await user1.save()

  // //creating a document or object Method 2
  // await User.create({name:"Mohan",city:"Pakistan",age:12})

  // //creating multiple documents
  // await User.insertMany([{name:'Vaishnavi',age:24},{name:'Shrivastava',city:'dewas'}])

  // //To find all the data
  // const ans = await User.find({});
  // console.log(ans);
  //To find data with some condition
  // const ans = await User.find({name:"Rohit"})
  // console.log(ans);
  

}
module.exports=main