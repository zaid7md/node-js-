/*
==================================================
📦 JSON (JavaScript Object Notation)
==================================================

🧠 DEFINITION:
---------------
JSON is a lightweight data format used for
storing and transferring data between systems.
It is text-based and language-independent.

==================================================
⚙️ EXAMPLE:
--------------------------------------------------
{
  "name": "Kaif",
  "age": 22,
  "isStudent": true,
  "skills": ["Node.js", "Express"],
  "address": { "city": "Toronto", "country": "Canada" }
}

==================================================
⚙️ JSON vs JAVASCRIPT OBJECT:
--------------------------------------------------
| Feature | JSON | JS Object |
|----------|------|------------|
| Quotes | Double quotes only | Single or double |
| Functions | Not allowed | Allowed |
| Use | Data exchange | Code logic |

==================================================
⚙️ JSON METHODS:
--------------------------------------------------
1️⃣ JSON.stringify(obj)
   → Converts JS object → JSON string

2️⃣ JSON.parse(jsonString)
   → Converts JSON string → JS object

==================================================
⚙️ EXAMPLES:
--------------------------------------------------
const obj = { name: "Kaif", age: 22 };
const str = JSON.stringify(obj);
console.log(str); // {"name":"Kaif","age":22}

const back = JSON.parse(str);
console.log(back.name); // Kaif

==================================================
⚙️ USE CASES:
--------------------------------------------------
✅ Sending data to APIs (POST requests)
✅ Storing configurations
✅ Reading/writing files
✅ LocalStorage or caching
✅ REST API responses

==================================================
⚙️ EXTRA OPTIONS:
--------------------------------------------------
JSON.stringify(obj, null, 2) // Pretty print
JSON.stringify(obj, ["name"]) // Include selected keys

==================================================
⚙️ ERROR HANDLING:
--------------------------------------------------
Invalid JSON → SyntaxError
Example:
const bad = "{ name: 'Kaif' }"; ❌
const good = '{ "name": "Kaif" }'; ✅

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ JSON = Text-based structured data
✅ stringify() = object → string
✅ parse() = string → object
✅ Used for APIs, config, and data exchange

==================================================
END OF NOTES
==================================================
*/
