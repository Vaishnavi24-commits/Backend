const bycrpt = require('bcrypt');
const password = "vaishnavi@123"
async function hashing(){
// const hashpass = await bycrpt.hash(password,10)
const salt = await bycrpt.genSalt(10)
const hashpass = await bycrpt.hash(password,salt)
const ans = await bycrpt.compare(password,hashpass)
console.log(ans);

}
hashing()