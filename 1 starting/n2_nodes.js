/*
==================================================
🧠 JAVASCRIPT VS NODE.JS — NOTES
==================================================

🔹 JavaScript:
- A programming language.
- Runs inside the browser (client-side).
- Used for frontend interactivity — buttons, forms, DOM manipulation.
- Examples: alert(), document.getElementById(), etc.

🔹 Node.js:
- A runtime environment, NOT a language.
- Built on Chrome’s V8 JavaScript Engine.
- Allows JavaScript to run outside the browser — on a server or local machine.
- Used for backend — creating servers, APIs, reading/writing files, etc.
- Gives access to the OS, file system, databases, and network.

==================================================
⚙️ ENVIRONMENT DIFFERENCE
==================================================

| Feature | JavaScript | Node.js |
|----------|-------------|----------|
| Runs In | Browser | Server / Local Machine |
| Access DOM | ✅ Yes | ❌ No |
| Access File System | ❌ No | ✅ Yes |
| Modules | import/export | require/module.exports |
| Main Use | Frontend | Backend |

Example:
Browser JS → document.write("Hello!");
Node.js → fs.writeFileSync("hello.txt", "Hello!");

==================================================
💡 ANALOGY
==================================================
Think of JavaScript as the *language* (like English).
Node.js is the *environment* where that language is used (like a restaurant kitchen).

==================================================
⚡ NPM (Node Package Manager)
==================================================
- Comes with Node.js installation.
- Used to install packages and libraries.
- Example: `npm install express`
- Stores project dependencies in `package.json`.

==================================================
🌐 WHAT IS A SERVER?
==================================================
A server is a computer/program that:
- Listens for requests from clients.
- Processes them.
- Sends back responses (like web pages or data).

Example: When you visit https://www.google.com
1. Your browser sends a request.
2. Google’s server receives and processes it.
3. The server sends back a response (HTML page).

==================================================
🧩 CLIENT vs SERVER
==================================================
| CLIENT | SERVER |
|---------|--------|
| Sends request | Receives request |
| Browser, app | Node.js, Apache, Nginx |
| Needs data | Provides data |
| Temporary | Always running |

==================================================
🖥️ SIMPLE NODE.JS SERVER EXAMPLE
==================================================
*/

const http = require('http'); // Built-in module for creating servers

// Create a basic server
const server = http.createServer((req, res) => {
  res.write('Hello, this is a simple Node.js server!');
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});

/*
==================================================
📘 EXPLANATION:
==================================================
1. `http.createServer()` → creates a server instance.
2. `(req, res)` → represents the request and response objects.
3. `res.write()` → sends data to the client.
4. `res.end()` → ends the response.
5. `server.listen(3000)` → runs the server on port 3000.
6. Open your browser → visit http://localhost:3000 → you'll see the message.

==================================================
🧾 SUMMARY
==================================================
- JavaScript = Programming Language
- Node.js = Runtime Environment for JavaScript
- Server = A program that listens for and responds to client requests
- npm = Tool to manage Node.js packages
- Together they enable full-stack JavaScript development 💪
==================================================
*/
