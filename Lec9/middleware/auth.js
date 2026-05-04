const Auth = (req,res,next)=>{
    const token = "ABCDEF"
    const Access = token==="ABCDEF"?1:0;

    if(!Access)
        return res.status(403).send("No permission")
}
next()

module.exports = {
    Auth,
}