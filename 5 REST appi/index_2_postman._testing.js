const express = require("express");
const users = require("./MOCK_DATA.json");//from mockaro

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

//REST api points 
app.get("/api/users", (req, res) => {
    return res.json(users); //used to send a JSON response back to the client.
});

//here the id field is a variable 
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);   //to fetch the id part of the request 
    const user = users.find((u) => u.id === id); //The .find() method in JavaScript is used to search through an array and return the first element that matches a given condition (the “test function”).
    //array.find(callbackFunction);
    return res.json(user);
});

//--------------------------------------------------
app.post("/api/users", (req, res) => {
    return res.json({ status: "pending" });
});
app.put("/api/users/:id", (req, res) => {
    //todo : create new users 
    return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
    // todo : edit the user with id
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    // todo : delete the user with id 
    return res.json({ status: "pending" });
});
//--------------------------------------------------

//!we can combine all the requests using 
//*app.route() is a shortcut for defining multiple HTTP methods (GET, POST, PUT, DELETE, etc.) on the same route path — all in one place.
app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);   //to fetch the id part of the request 
    const user = users.find((u) => u.id === id); //The .find() method in JavaScript is used to search through an array and return the first element that matches a given condition (the “test function”).
    return res.json(user);
}).put((req, res) => {
    //todo : create new users 
    return res.json({ status: "pending" });
}).patch((req, res) => {
    // todo : edit the user with id
    return res.json({ status: "pending" });
}).delete((req, res) => {
    // todo : delete the user with id 
    return res.json({ status: "pending" });
});
