const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end(); // fixed typo

    const log = `${Date.now()} : ${req.url} New Req received\n`;

    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch (req.url) {
            case '/':
                res.end("Home Page");
                break;
            case '/contact':
                res.end("Phone Number");
                break;
            case '/about':
                res.end("About");
                break;
            default:
                res.end("Error 404 - Not Found");
                break;
        }
    });
});

server.listen(8003, () => console.log("Server started on port 8003"));
