// const http = require("http"); 
const express = require("express"); 

const app = express(); 

app.get('/' , (req , res) =>{
    return res.send("Hellow from home page"); 
})

app.get('/about' , (req , res) =>{
    return res.send("About page\t hello " + req.query.name); 
})

app.listen(8000 , () => console.log("Server started")); //this internally uses http module 
//!not even necessary as express allows us to create a server directly 
// const server = http.createServer(app); 
// server.listen(8006 , () => console.log("Server started")); 

/*
==================================================
🚀 EXPRESS.JS — COMPLETE NOTES
==================================================

🧠 DEFINITION:
---------------
Express.js is a fast, minimal, flexible web framework
built on top of Node.js. It simplifies handling
HTTP requests, responses, routing, and middleware.

==================================================
⚙️ WHY USE EXPRESS:
--------------------------------------------------
✅ Easier routing (GET, POST, PUT, DELETE)
✅ Built-in middleware support
✅ JSON handling
✅ Cleaner and shorter syntax
✅ Perfect for APIs and web servers

==================================================
⚙️ INSTALLATION:
--------------------------------------------------
npm install express

==================================================
⚙️ BASIC SERVER EXAMPLE:
--------------------------------------------------
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

app.listen(3000, () => console.log('Server running on port 3000'));

==================================================
⚙️ FEATURES:
--------------------------------------------------
| Feature | Description |
|----------|-------------|
| Routing | Handle URLs easily |
| Middleware | Execute functions before sending response |
| Static Files | Serve CSS, JS, images |
| JSON Parsing | Parse incoming JSON data |
| Template Engines | Render dynamic HTML pages |
| Error Handling | Centralized error management |

==================================================
⚙️ MIDDLEWARE EXAMPLE:
--------------------------------------------------
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

==================================================
⚙️ JSON HANDLING:
--------------------------------------------------
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('JSON received');
});

==================================================
⚙️ ROUTING EXAMPLE:
--------------------------------------------------
app.get('/', (req, res) => res.send('GET'));
app.post('/', (req, res) => res.send('POST'));
app.put('/', (req, res) => res.send('PUT'));
app.delete('/', (req, res) => res.send('DELETE'));

==================================================
⚙️ ADVANTAGES:
--------------------------------------------------
✅ Cleaner code than raw Node.js
✅ Easy to scale and maintain
✅ Supports middleware and third-party modules
✅ Backbone of frameworks like Next.js, Nest.js

==================================================
💬 IN SHORT:
--------------------------------------------------
Express.js = Node.js made simple ✨  
A web framework to quickly build APIs and servers.

==================================================
END OF NOTES
==================================================
*/
