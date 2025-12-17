const http  = require("http"); 
const fs = require("fs"); 
const url = require("url"); 

i = 1 ; 
const server = http.createServer((req , res) =>{
    console.log("User : " + i); 
    i++; 
    const myUrl = url.parse(req.url , true); 
    switch(myUrl.pathname){
        case '/' :
            
                res.end("Home page"); 
                break ; 
            
        case '/about' :
            
                const name = myUrl.query.name || "Guest"; 
                res.end("About section " + "name is : "+name); 
                break ; 
            
        default:
            res.end("Url does not exists"); 
            break ; 
        
    }
});

server.listen(4000 , () => console.log("Server started")); 
