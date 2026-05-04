//const url = "mongodb+srv://MISSVAISHNAVI:Vaishnavi@240920055@learningmongo.lj45b5u.mongodb.net/"

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "process.env.MONGO_URI"
const client = new MongoClient(url);

// Database Name
const dbName = 'VaishnaviApp';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  const findResult =  collection.find({})
  const ans = await findResult.toArray()
  console.log('Found documents =>', ans);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());