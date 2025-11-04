/*
==================================================
⚙️ EXPRESS.JS — ROUTE PARAMETERS (:id)
==================================================

🧠 DEFINITION:
---------------
In Express.js, a colon (:) in a route path defines a
"Route Parameter" — a placeholder for dynamic values
in the URL.

Example:
---------
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});

==================================================
⚙️ HOW IT WORKS:
--------------------------------------------------
Route: /api/users/:id

| Request URL | req.params.id |
|--------------|---------------|
| /api/users/1 | "1" |
| /api/users/45 | "45" |
| /api/users/abc | "abc" |

==================================================
⚙️ ACCESSING PARAMETER:
--------------------------------------------------
app.get('/api/users/:id', (req, res) => {
  console.log(req.params.id); // dynamic value
});

==================================================
⚙️ MULTIPLE PARAMETERS:
--------------------------------------------------
app.get('/users/:userId/books/:bookId', (req, res) => {
  console.log(req.params);
});

URL: /users/10/books/5
Output: { userId: "10", bookId: "5" }

==================================================
⚙️ ROUTE PARAMS vs QUERY PARAMS:
--------------------------------------------------
| Type | Example URL | Accessed By | Purpose |
|-------|--------------|-------------|----------|
| Route Param | /users/:id → /users/5 | req.params.id | Identifies resource |
| Query Param | /users?id=5 | req.query.id | Filters/search data |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ :id = dynamic placeholder in route.
✅ Captured via req.params.
✅ Used for resource-specific API routes (e.g. /users/1).
✅ Supports multiple params (/users/:userId/books/:bookId).

==================================================
END OF NOTES
==================================================
*/
