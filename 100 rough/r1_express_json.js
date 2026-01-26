const express = require("express"); 
const app = express(); 
const users = require("./MOCK_DATA.json");

i = 0 ; 
function find_user(arr , id){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].id === id) return arr[i]; 
    }
    return "No user"; 
}
app.get("/users/:id" , (req , res) =>{
    console.log(`User ${i} detected : ${req.accepted} \n`); 
    i++; 
    
    const id = Number(req.params.id);
    const u_id = find_user(users , id); 
    return res.json(u_id); 
});

app.listen(8000 , () => console.log("Server started")); 

