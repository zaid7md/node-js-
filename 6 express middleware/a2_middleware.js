const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 8000;


//Middlewares 
//!--------------------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use((req , res , next) =>{
    console.log("Hello from middleware 1"); 
    req.myUserName = "zaid.dev";

    fs.appendFile('./log1.txt', `\n${Date.now()} : ${req.ip} ${req.method} : ${req.path}` ,(err, data) =>{
    next(); //if not written then request could not be sent to the server 
    // or to the next middleware                
    });
});
app.use((req , res , next) =>{
    console.log("Hello from middleware 2" , req.myUserName);  
    next(); 
});
//!--------------------------------------------------------

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
    console.log("In get route method");
    return res.json(users);
});


app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);
    return res.json(user);
});


app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log("Body : ", body);
    users.push({ id: users.length + 1, ...body });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    });
});

app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id); 
    const body = req.body ; 
    let found = false; 
    let obj ; 
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].id === id){
            users[i] = {id , ...body}; 
            obj = users[i]; 
            found = true ; 
            break ;  
        }
    }
    if(!found) return res.json({status : 'failed' , error : 'User not found'}); 

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err , data) =>{
        
        return res.json({status: "success", updated: true,user: obj}); 
    }) 
});

app.patch("/api/users/:id", (req, res) => {

    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1); 
            found = true;
            break ; 
        }
    }

    if (!found) {
        return res.json({ status: "Failed", delete: "No", error: "Id does not exist in the data" })

    }
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", delete: "yes" })
    });
});

