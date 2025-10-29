/*
==================================================
🌐 WHAT IS A URL (UNIFORM RESOURCE LOCATOR)
==================================================

🧠 DEFINITION:
---------------
A URL is the address of a resource on the internet.
It tells the browser:
- which server to contact
- how to communicate (protocol)
- and what resource to fetch (path, query, etc.)

==================================================
⚙️ EXAMPLE URL:
--------------------------------------------------
https://www.example.com:8080/products/item?id=5#reviews

| Part | Description |
|------|--------------|
| https:// | Protocol (communication type) |
| www.example.com | Domain / Hostname |
| :8080 | Port number (optional) |
| /products/item | Path (resource location) |
| ?id=5 | Query parameter (extra data) |
| #reviews | Fragment (specific section of page) |

==================================================
🧩 REAL EXAMPLES:
--------------------------------------------------
1️⃣ https://www.google.com/search?q=nodejs
   → Protocol: https
   → Domain: google.com
   → Path: /search
   → Query: q=nodejs

2️⃣ https://api.github.com/users/kaif/repos
   → Access GitHub API for Kaif’s repositories.

==================================================
⚙️ COMMON COMPONENTS:
--------------------------------------------------
| Component | Description |
|------------|-------------|
| Protocol | HTTP / HTTPS / FTP |
| Domain | Human-readable website name |
| Port | Communication channel (80, 443, etc.) |
| Path | File or API endpoint |
| Query String | Key-value pairs (?key=value) |
| Fragment | Reference to part of page (#section1) |

==================================================
⚙️ HOW URL WORKS INTERNALLY:
--------------------------------------------------
1. Browser extracts domain from URL.
2. DNS resolves domain to IP address.
3. Connects to server on specified port.
4. Sends HTTP request for the path.
5. Server responds with data/webpage.

==================================================
⚡ IN NODE.JS:
--------------------------------------------------
http.createServer((req, res) => {
  console.log(req.url); // shows path + query
}).listen(3000);

Access:
http://localhost:3000/about?name=Kaif

req.url → "/about?name=Kaif"

==================================================
💬 SUMMARY:
--------------------------------------------------
✅ URL = Internet address of a resource.
✅ Parts: Protocol, Domain, Port, Path, Query, Fragment.
✅ Used by browsers, APIs, and Node.js servers to locate data.

==================================================
END OF NOTES
==================================================
*/

/*
==================================================
🔍 NODE.JS — QUERY PARAMETERS IN URL
==================================================

🧠 DEFINITION:
---------------
Query parameters are extra data sent to the server
via the URL after a "?" symbol.

Used to pass filters, search terms, page numbers, etc.

Example:
---------
https://example.com/search?query=phone&limit=10

query = "phone"
limit = "10"

==================================================
⚙️ URL STRUCTURE:
--------------------------------------------------
https://domain.com/path?key1=value1&key2=value2
| Part | Meaning |
|------|----------|
| ? | Starts query string |
| & | Separates parameters |
| = | Assigns value |

==================================================
🧩 REAL EXAMPLES:
--------------------------------------------------
1️⃣ amazon.com/products?category=electronics&sort=price
   → category = electronics
   → sort = price

2️⃣ youtube.com/results?search_query=music&page=2
   → search_query = music
   → page = 2

3️⃣ api.weather.com/data?city=Toronto&unit=celsius
   → city = Toronto
   → unit = celsius

==================================================
⚙️ HANDLING QUERY PARAMS IN NODE.JS:
--------------------------------------------------
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query; // e.g., { name: 'John', age: '25' }
  res.end(`Hello ${query.name}, age ${query.age}`);
}).listen(3000);

Access:
http://localhost:3000/?name=John&age=25

==================================================
⚙️ QUERY vs ROUTE PARAMETERS:
--------------------------------------------------
| Type | Example | Use |
|------|----------|-----|
| Query Param | /products?category=phone | Filters/search |
| Route Param | /products/phone | Identifies a resource |

==================================================
💬 SUMMARY:
--------------------------------------------------
✅ Query parameters start after '?'
✅ Separated by '&'
✅ Used to send small key=value data to server
✅ Easily parsed in Node.js or Express.js

==================================================
END OF NOTES
==================================================
*/
