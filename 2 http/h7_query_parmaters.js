// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Import the built-in 'fs' (File System) module to handle file operations
const fs = require("fs");

// Import the built-in 'url' module to parse URLs (paths, query strings, etc.)
const url = require("url");

// Create an HTTP server
const server = http.createServer((req, res) => {

    // Skip requests for the browser's default /favicon.ico (the small browser tab icon)
    if (req.url === "/favicon.ico") return res.end();

    // Create a log message with the current timestamp and requested URL
    const log = `${Date.now()} : ${req.url} New Req received\n`;

    // Parse the incoming request URL to extract pathname and query parameters
    // e.g., if URL is '/about?name=kaif', then
    // myUrl.pathname = '/about' and myUrl.query = { name: 'kaif' }
    const myUrl = url.parse(req.url, true);
    //Setting it to true meansd allowing it to parse the qeury parameters as well 

    // Log the parsed URL object to the console (for debugging)
    console.log(myUrl);

    // Append the log message to a file named 'log3.txt'
    fs.appendFile("./log3.txt", log, (err) => {

        // If there's an error writing to the file, return a 500 response
        if (err) {
            console.error("Error writing to log:", err);
            return res.end("Internal Server Error");
        }

        // Route handling based on the pathname (ignores query strings)
        switch (myUrl.pathname) {
            case '/': // When user visits 'http://localhost:8004/'
                res.end("Home Page");
                break;

            case '/contact': // When user visits 'http://localhost:8004/contact'
                res.end("Phone Number");
                break;

            case '/about': // When user visits 'http://localhost:8004/about'
                const username = myUrl.query.myname  //extracting the name field from the parsed query parameters 
                res.end(`Hi ${username}`);
                break;
            
            case '/search':
                const search = myUrl.query.search_query; 
                res.end("Here are your results for " + search);
                break; 
                //!http://localhost:8004/search?search_query=Js+notes

            default: // For any other URL that doesn't match above
                res.end("Error 404 - Not Found");
                break;
        }
    });
});

// Start the server on port 8004
// When started successfully, log message to console
server.listen(8004, () => console.log("Server started on port 8004"));
