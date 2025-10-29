const http = require("http"); 
const fs = require("fs"); 

i = 0 ; 
const myServer = http.createServer((req , res) => {
    const log = `${Date.now()} : New Req recieved\n`; 
    console.log(i + " : " + "request\n");
    i++; 
    fs.appendFile("log.txt" , log , (err , data) => {
        res.end("Hellow from server"); 
    });
    res.end("")
});

myServer.listen(8000 , () => console.log("Server started")); 

/*
==================================================
📦 NODE.JS HTTP MODULE — COMPLETE NOTES
==================================================

🧠 DEFINITION:
--------------
- The 'http' module allows Node.js to create web servers and handle HTTP requests/responses.
- It is a built-in (core) module → no need to install with npm.

==================================================
⚙️ 1️⃣ IMPORTING THE MODULE
--------------------------------------------------
const http = require('http');

==================================================
⚙️ 2️⃣ CREATING AN HTTP SERVER
--------------------------------------------------
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world! This is my Node.js server.');
});

server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});

Explanation:
------------
1. http.createServer() → creates a server.
2. req → incoming request object.
3. res → response object.
4. res.writeHead() → set status and headers.
5. res.end() → send response to client.
6. listen(3000) → server runs on port 3000.

==================================================
⚙️ 3️⃣ HANDLING ROUTES
--------------------------------------------------
if (req.url === '/') res.end('Home Page');
else if (req.url === '/about') res.end('About Us');
else { res.statusCode = 404; res.end('Not Found'); }

==================================================
⚙️ 4️⃣ SENDING HTML RESPONSES
--------------------------------------------------
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<h1>Hello from Node.js!</h1>');

==================================================
⚙️ 5️⃣ MAKING HTTP REQUESTS (CLIENT)
--------------------------------------------------
const options = { hostname: 'example.com', path: '/', method: 'GET' };
const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
req.on('error', (err) => console.error(err));
req.end();

==================================================
⚙️ 6️⃣ COMMON METHODS / PROPERTIES
--------------------------------------------------
| Method | Description |
|--------|--------------|
| createServer() | Creates an HTTP server |
| server.listen() | Starts listening on a port |
| req.url | Requested URL |
| req.method | HTTP method (GET, POST, etc.) |
| res.writeHead() | Set response code & headers |
| res.end() | Send response & close connection |
| http.request() | Make HTTP request |
| http.get() | Shortcut for GET requests |

==================================================
⚙️ 7️⃣ REAL-WORLD USE
--------------------------------------------------
- Frameworks like Express.js are built on top of the HTTP module.
- Express simplifies routing, middleware, and responses,
  but underneath it still uses http.createServer().

==================================================
💬 IN SHORT
--------------------------------------------------
✅ http module = built-in Node.js web server creator.  
✅ Handles both server (incoming requests) and client (outgoing requests).  
✅ Basis for frameworks like Express.js.

==================================================
END OF NOTES
==================================================
*/


/*
==================================================
🌐 NODE.JS — UNDERSTANDING PORTS
==================================================

🧠 WHAT IS A PORT?
-------------------
- A port is like a "door" on a computer used for network communication.
- Each program uses a unique port to send/receive data.
- Helps OS identify which program incoming network data belongs to.

Analogy:
---------
IP address = Building address 🏢  
Port = Door number 🚪

Example:
---------
192.168.1.10:3000
→ 192.168.1.10 = Device address
→ 3000 = Port number used by Node.js server

==================================================
⚙️ WHY PORTS ARE NEEDED
------------------------
- Multiple apps can use the internet simultaneously.
- Ports ensure data reaches the correct application.

==================================================
⚙️ COMMON PORT NUMBERS
------------------------
| Port | Protocol | Purpose |
|------|-----------|----------|
| 20, 21 | FTP | File transfer |
| 22 | SSH | Remote login |
| 25 | SMTP | Email sending |
| 53 | DNS | Domain name resolution |
| 80 | HTTP | Web traffic |
| 443 | HTTPS | Secure web traffic |
| 3306 | MySQL | Database |
| 5432 | PostgreSQL | Database |
| 27017 | MongoDB | Database |
| 8080, 3000, 5000 | Custom | Web apps & local dev |

==================================================
⚙️ USING PORTS IN NODE.JS
--------------------------
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello, Node.js!");
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

- server.listen(3000) → Node.js listens on port 3000.
- Visit http://localhost:3000 to access your server.

==================================================
⚠️ RESERVED & CUSTOM PORTS
---------------------------
- 0–1023 → Reserved (system-level services like HTTP, SSH).
- 1024–65535 → For user/developer applications.
- Developers commonly use 3000, 4000, 8080.

==================================================
⚡ MULTIPLE SERVERS ON SAME MACHINE
-----------------------------------
Each app must use a different port:

App 1 → localhost:3000  
App 2 → localhost:4000  
Database → localhost:27017

==================================================
🧾 SUMMARY
-----------------------------------
✅ Port = logical communication channel.  
✅ Range = 0–65535.  
✅ Node.js commonly uses ports like 3000 or 8080.  
✅ One server per port per IP.

==================================================
END OF NOTES
==================================================
*/
