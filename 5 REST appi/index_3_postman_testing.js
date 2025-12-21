const express = require("express");
const users = require("./MOCK_DATA.json");//from mockaro
const fs = require("fs"); 
const app = express();
const port = 8000;



app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});
app.listen(port, () => console.log(`Server started at port : ${port}`));

app.get("/api/users", (req, res) => {
    return res.json(users);
});


app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);  
    const user = users.find((u) => u.id === id);  
    return res.json(user);
});

app.use(express.urlencoded({extended :false}));

app.post("/api/users", (req, res) => {
    const body = req.body ; 
    console.log("Body : " , body);
    users.push({id :users.length+1, ...body }); 
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users) ,(err , data) =>{
        return res.json({ status: "success" , id: users.length  });
    }); 
});
//JSON.stringify(users) used because files store text not JS objects
//...body -> spread operator , it copies all key value pairs from the body object into a new object
/*
Avoids writing each field manually
Keeps code clean and scalable
Creates a new object (does not modify body)
*/
app.put("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    for(let i = 0 ; i < user.length ; i++){
        if(users[i].id == id){
            users.splice(i,1); //remove adding elements in array 
            //array.splice(startIndex, deleteCount, item1, item2, ...)
        }
    }
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "success" , delete : "yes" });
});

