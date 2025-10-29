const http = require("http"); 
const fs=  require("fs"); 

const server = http.createServer((req , res) => {
    switch (req.url) {
        case '/':
            res.end("HomePage"); 
            break;
        case '/contact':
            res.end("phone number"); 
            break ; 
        case '/about':
            res.end("about"); 
            break ; 
        default:
            res.end("Error 404 not found"); 
            break;
    }
});

server.listen(8002 , () => console.log("Server Started")); 