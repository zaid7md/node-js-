/*
==================================================
🌐 REST API — COMPLETE NOTES
==================================================

🧠 DEFINITION:
---------------
REST = Representational State Transfer
It is an architectural style for building web APIs
that communicate over HTTP using standard methods.

==================================================
⚙️ HOW IT WORKS:
--------------------------------------------------
Client sends HTTP requests → Server sends back responses.

Example:
---------
GET /users → fetch users
POST /users → add user
PUT /users/1 → update user
DELETE /users/1 → remove user

==================================================
⚙️ PRINCIPLES OF REST:
--------------------------------------------------
1️⃣ Client–Server Separation → Frontend & backend independent.
2️⃣ Stateless → Server does not store session info.
3️⃣ Uniform Interface → Standard URLs and methods.
4️⃣ Cacheable → Responses can be cached.
5️⃣ Layered System → Can include proxies, CDNs, etc.
6️⃣ Code on Demand (optional) → Send executable code if needed.

==================================================
⚙️ COMMON HTTP METHODS:
--------------------------------------------------
| Method | Operation | Description |
|---------|------------|-------------|
| GET | READ | Retrieve data |
| POST | CREATE | Add new data |
| PUT | UPDATE | Replace data |
| PATCH | MODIFY | Partially update |
| DELETE | DELETE | Remove data |

==================================================
⚙️ DATA FORMAT:
--------------------------------------------------
Usually JSON:
{
  "id": 1,
  "name": "Kaif"
}

==================================================
⚙️ NODE.JS EXAMPLE (EXPRESS):
--------------------------------------------------
app.get('/users', (req, res) => res.json([...]));
app.post('/users', (req, res) => res.status(201).json(...));
app.put('/users/:id', (req, res) => res.json(...));
app.delete('/users/:id', (req, res) => res.json(...));

==================================================
⚙️ REST VS OTHER TYPES:
--------------------------------------------------
| Type | Description |
|------|--------------|
| REST | Resource-based (HTTP + JSON) |
| SOAP | XML-based heavy protocol |
| GraphQL | Client specifies response |
| RPC | Function-based remote calls |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ REST API = Standard web API style
✅ Uses HTTP methods + URLs + JSON
✅ Stateless, flexible, and language-independent
✅ Foundation for modern web backends

==================================================
END OF NOTES
==================================================
*/
