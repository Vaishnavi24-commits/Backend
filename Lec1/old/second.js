console.log("Shrivastava");
function sum(a,b){
    sum=a+b
    console.log(sum);
    
}

function subtract(a,b){
    console.log(a-b);
    
}
//module.exports={sum,subtract};
module.exports.sum = sum
module.exports.subtract=subtract