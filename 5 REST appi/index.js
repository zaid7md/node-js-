const express = require("express"); 
const users = require("./MOCK_DATA.json");//from mockaro

const app = express() ; 
const port = 8000; 

app.get("/api/users",(req,res) =>{
    return res.json(users); //used to send a JSON response back to the client.
})

app.get("/users" , (req , res) =>{
    const html = `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html); 
});
app.listen(port , () => console.log(`Server started at port : ${port}`));

/*
⚙️ Syntax:
array.map(callback);

- 'callback' runs once for every element in the array.
- The original array is NOT modified.
- The returned array can contain any transformed data.

------------------------------------------------------------
📘 Example:
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
// squares = [1, 4, 9]

------------------------------------------------------------
📗 Using .map() with JSON data:
- Works perfectly if the JSON is an array of objects.
- If the JSON is a string, convert it first using JSON.parse().
*/