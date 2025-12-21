const express = require("express"); 
const app = express(); 
const data = require("./MOCK_DATA.json");

function find_id(id){
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].id == id){
            return data[i]; 
        }
    }
}
app.get("/Home/:myname" , (req , res) =>{
    const user_name = req.params.myname ; 
    res.send(`Hello user : ${user_name}`); 
    // res.end('This is the end'); 
    /*
    !You cannot send two responses.

    res.send() already ends the response

    Calling res.end() after that will throw:

    ❌ Cannot set headers after they are sent
    */
});

app.get("/app/user/:id" , (req , res) =>{
    const id = req.params.id ; 
    const user = find_id(id);
    if(!user){
        return res.end("Your id is not present"); 
    } 

    res.json(user); 
});

app.get("/app/age/:myage" , (req , res) =>{
    const age = Number(req.params.myage) ; 
    if(age < 18){
        res.send("Not eligible");
    }
    else {
        res.send("Eligible"); 
    }
});

app.listen(4000 , () => 
    console.log("Server has started on port 4000")
); 
