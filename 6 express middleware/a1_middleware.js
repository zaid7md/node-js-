/*
==================================================
⚙️ EXPRESS MIDDLEWARES — COMPLETE NOTES
==================================================

🧠 DEFINITION:
---------------
Middleware is a function that runs between
the request and the response in Express.js.

It has access to:
- req (request)
- res (response)
- next() → passes control forward

==================================================
⚙️ BASIC SYNTAX:
--------------------------------------------------
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

If next() is NOT called → request stops there.

==================================================
⚙️ REQUEST FLOW:
--------------------------------------------------
Request → Middleware → Route → Response

==================================================
⚙️ TYPES OF MIDDLEWARE:
--------------------------------------------------

1️⃣ Application-Level:
---------------------
Runs for every request or specific paths.

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

2️⃣ Route-Level:
----------------
Runs only for specific routes.

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send("Dashboard");
});

3️⃣ Built-in Middleware:
------------------------
express.json() → parses JSON
express.urlencoded() → parses form data
express.static() → serves static files

4️⃣ Third-Party Middleware:
----------------------------
cors, morgan, helmet

app.use(cors());

5️⃣ Error-Handling Middleware:
-------------------------------
app.use((err, req, res, next) => {
  res.status(500).send("Error occurred");
});

==================================================
⚙️ MULTIPLE MIDDLEWARES:
--------------------------------------------------
app.get('/profile',
  middleware1,
  middleware2,
  (req, res) => res.send("Profile")
);

Executed in order (top → bottom).

==================================================
⚙️ WHY USE MIDDLEWARE:
--------------------------------------------------
✅ Authentication
✅ Logging
✅ Validation
✅ Error handling
✅ Cleaner & reusable code

==================================================
💬 IN SHORT:
--------------------------------------------------
Middleware = request processing layer  
Runs before route handlers  
Controls request flow using next()

==================================================
END OF NOTES
==================================================
*/
