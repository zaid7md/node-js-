const http = require("http"); 
const fs = require("fs");
const url = require("url"); 

const server = http.createServer((req , res) =>{
    if(req.url === "/favicon.ico") return res.end(); 
    const log = `${Date.now()} : ${req.method}(method) ${req.url}(url) New request received\n`; 
    
    const myurl = url.parse(req.url , true); 

    fs.appendFile("./log.txt" , log , (err) =>{
       if(err){
        console.log("Error"); 
        res.end("Error occured in appending"); 
       }
       switch (myurl.pathname) {
            case '/': 
                if(req.method === "GET"){
                    res.end("Your have used get method to reach the home page");
                }
                // res.end("Home Page");
                break;

            case '/contact': 
            res.end("This is the phone number");
                break;

            case '/about': 
                const username = myurl.query.myname  
                res.end("About us");
                break;
            
            case '/search':
                const search = myurl.query.search_query; 
                res.end("Here are your results for " + search);
                break; 
            
            case '/signup':
                if(req.method === "GET") res.end("This is a signup page"); 
                else if(req.method == "POST"){
                    //todo : DB query
                    res.end("Successfull"); 
                }
            default: 
                res.end("Error 404 - Not Found");
                break;
        }
    });
});

server.listen(8005 , () => {
    console.log("Server started"); 
})

/*
==================================================
🌐 HTTP METHODS — COMPLETE NOTES
==================================================

🧠 DEFINITION:
---------------
HTTP methods (or verbs) define the type of action
the client wants to perform on the server’s resource.

Example:
---------
GET /users → Fetch data
POST /users → Create data
PUT /users/1 → Replace data
DELETE /users/1 → Remove data

==================================================
⚙️ COMMON HTTP METHODS
--------------------------------------------------
| Method | Purpose | Example |
|---------|----------|----------|
| GET | Retrieve data | GET /users |
| POST | Create new data | POST /users |
| PUT | Replace existing data | PUT /users/1 |
| PATCH | Partially update | PATCH /users/1 |
| DELETE | Remove data | DELETE /users/1 |
| HEAD | Get headers only | HEAD /users |
| OPTIONS | Discover allowed methods | OPTIONS /users |

==================================================
⚙️ EXAMPLES (EXPRESS.JS)
--------------------------------------------------
app.get('/', (req, res) => res.send('GET request'));
app.post('/', (req, res) => res.send('POST request'));
app.put('/', (req, res) => res.send('PUT request'));
app.patch('/', (req, res) => res.send('PATCH request'));
app.delete('/', (req, res) => res.send('DELETE request'));

==================================================
⚙️ SAFE & IDEMPOTENT METHODS
--------------------------------------------------
| Method | Safe | Idempotent | Meaning |
|---------|------|-------------|----------|
| GET | ✅ | ✅ | No data change |
| POST | ❌ | ❌ | Creates new resource |
| PUT | ❌ | ✅ | Replaces resource |
| PATCH | ❌ | ❌ | Partial update |
| DELETE | ❌ | ✅ | Deletes resource |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ GET → Read  
✅ POST → Create  
✅ PUT → Replace  
✅ PATCH → Modify  
✅ DELETE → Remove  
✅ HEAD → Headers only  
✅ OPTIONS → What’s allowed?

==================================================
END OF NOTES
==================================================
*/
