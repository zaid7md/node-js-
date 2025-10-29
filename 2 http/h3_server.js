/*
Yes — every single time a user (or client) sends a request to your Node.js server,
👉 the callback function inside http.createServer() is executed.
*/
const http = require("http"); 
i = 1;  
const server = http.createServer((req , res) =>{
    console.log("Request received : " + i + "\n"); 
    i++; 
    // console.log(req);//!all the information of the user related request 
    res.end("this is the response\n");
});
server.listen(8001 , () => console.log("Server started")); 