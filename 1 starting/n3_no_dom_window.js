/*
==================================================
🧠 JAVASCRIPT FUNCTIONALITIES IN NODE.JS
==================================================

Node.js can run MOST JavaScript features — but NOT all.
It supports the **core language features** (logic, loops, functions, etc.)
but lacks **browser-specific features** like DOM or window objects.

==================================================
✅ WHAT NODE.JS CAN RUN (SUPPORTED FEATURES)
==================================================

Node.js uses Chrome’s V8 engine, so it supports all the core parts
of the JavaScript language.

Examples of Supported Functionalities:
--------------------------------------

1️⃣ Variables & Data Types
   - let, const, var
   - Number, String, Boolean, Object, Array

2️⃣ Operators
   - +, -, *, /, ==, ===, %, etc.

3️⃣ Functions & Arrow Functions
   - function sayHello() { ... }
   - const greet = () => { ... }

4️⃣ Control Flow
   - if, else, for, while, switch

5️⃣ Objects & Classes (ES6)
   - class, constructor, extends, super

6️⃣ Asynchronous Programming
   - setTimeout, setInterval, Promise, async/await

7️⃣ Modules
   - require(), module.exports (CommonJS)
   - import/export (ES Modules)

8️⃣ JSON Handling
   - JSON.parse(), JSON.stringify()

9️⃣ Error Handling
   - try...catch, throw new Error()

🔟 Console
   - console.log(), console.error(), console.table()

✅ In short:
Node.js runs all normal JavaScript logic perfectly fine.

==================================================
🚫 WHAT NODE.JS CANNOT RUN (NOT SUPPORTED)
==================================================

Node.js does NOT have access to browser-specific APIs because
it runs outside of the browser (on servers or local machines).

Examples of Unsupported Functionalities:
----------------------------------------

1️⃣ DOM Manipulation
   ❌ document.getElementById(), querySelector(), innerHTML
   → Node.js has no DOM (no web page to interact with).

2️⃣ Window Object
   ❌ window.alert(), window.location
   → There is no window or visual interface.

3️⃣ Browser Events
   ❌ onclick, onload, addEventListener()
   → Node doesn’t handle GUI or user events.

4️⃣ LocalStorage / SessionStorage
   ❌ localStorage.setItem(), sessionStorage.getItem()
   → These only exist inside browsers.

5️⃣ fetch() (for older Node versions)
   ❌ Not available before Node 18.
   ✅ You can use the 'node-fetch' package instead.

6️⃣ CSS or Rendering APIs
   ❌ style.display, getComputedStyle()
   → Node doesn’t render anything visually.

7️⃣ Web APIs (Browser-only)
   ❌ WebSocket, WebRTC, Canvas, FileReader
   → Not built-in, but can be added via external packages.

🚫 In short:
Node.js can’t interact with HTML, CSS, or browser UI.
It focuses on server-side logic, files, and network operations.

==================================================
⚙️ ANALOGY
==================================================
| Environment | Purpose | Access |
|--------------|----------|---------|
| Browser JS   | Interact with users/webpages | Has DOM, Window, Document |
| Node.js      | Interact with system/network  | Has FS, HTTP, Process, OS |

==================================================
🧩 CODE EXAMPLES
==================================================

❌ Browser-only JavaScript:
---------------------------
document.getElementById("title").innerText = "Hello";
alert("Hi there!");

➡️ This fails in Node.js because there’s no `document` or `window`.

✅ Node.js JavaScript:
----------------------
const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello from Node.js!");
console.log("✅ File created successfully!");

➡️ Works perfectly — Node.js gives access to files and OS-level operations.

==================================================
🧾 SUMMARY TABLE
==================================================

| Feature / Category       | Works in Browser JS | Works in Node.js |
|---------------------------|--------------------|------------------|
| DOM / Window              | ✅ Yes             | ❌ No             |
| File System               | ❌ No              | ✅ Yes            |
| Network Requests           | ✅ fetch()         | ✅ http / axios   |
| UI Events (onclick, etc.) | ✅ Yes             | ❌ No             |
| OS-Level Operations        | ❌ No              | ✅ Yes            |
| Async / Await             | ✅ Yes             | ✅ Yes            |
| JSON, Arrays, Objects     | ✅ Yes             | ✅ Yes            |

==================================================
📘 SUMMARY
==================================================

✅ Node.js runs:
- All core JavaScript syntax and logic
- Asynchronous operations
- Files, servers, databases, and APIs

❌ Node.js cannot run:
- DOM or browser UI manipulations
- Window or document objects
- Browser storage or events

👉 JavaScript = the language  
👉 Node.js = environment that runs JavaScript outside the browser  
👉 Browser JS = Frontend  
👉 Node.js = Backend  

==================================================
END OF NOTES
==================================================
*/
