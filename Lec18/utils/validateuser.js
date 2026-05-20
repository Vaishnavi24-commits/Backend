const validator = require("validator")
function validateUser (data){
    const mandatoryFields = ["age", "emailId", "firstName","password"];
        const IsAllowed = mandatoryFields.every((k)=>Object.keys(data).includes(k))
        if(!IsAllowed){
            throw new Error("Fields Missing")
        }
        if(!validator.isEmail(data.emailId)){
            throw new Error("Invalid Email")
        }
        if(!validator.isStrongPassword(data. password))
        {
            throw new Error("Weak Password")
        }
        if(!(data.firstName.length>=3 && data.firstName.length<=20)){
            throw new Error("firstName should have atleast 3 character and atMost 20 characters")
        }
}
module.exports = validateUser