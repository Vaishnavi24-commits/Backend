const response = await fetch("https://api.example.com/data") //get request

const response2 = await fetch("https://api.example.com/data", {
    method: "POST",
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify({name:'John',age:30})
})

const response3 = await fetch("https://api.example.com/data", {
    method: "PATCH",
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify({age:30})
})