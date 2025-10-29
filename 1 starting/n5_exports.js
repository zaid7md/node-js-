function add(a,b){
    return a + b ; 
}

function sub(a,b){
    return a- b ; 
}
module.exports = {add , sub} ; 

/*
==================================================
📦 module.exports in Node.js
==================================================

🧠 Definition:
--------------
Every Node.js file is treated as a module.
By default, variables and functions inside a module are private.
To make them accessible in other files, you must export them.

module.exports = object used to define what a module shares.

==================================================
⚙️ EXAMPLE 1 — EXPORTING A SINGLE FUNCTION
==================================================

// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require('./math');
console.log(add(5, 3)); // Output: 8

==================================================
⚙️ EXAMPLE 2 — EXPORTING MULTIPLE FUNCTIONS
==================================================

// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

module.exports = { add, subtract };

// app.js
const math = require('./math');
console.log(math.add(10, 5));      // 15
console.log(math.subtract(10, 5)); // 5

==================================================
⚙️ EXAMPLE 3 — USING exports SHORTCUT
==================================================

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

⚠️ NOTE:
exports = ... ❌ (Don’t reassign directly)
Always attach methods like exports.add = ...

==================================================
🧩 ANALOGY
==================================================
Think of module.exports like a 📦 package:
- Your file = factory
- module.exports = the package you ship
- require() = someone opening the package

==================================================
🧾 SUMMARY TABLE
==================================================

| Concept | Description |
|----------|-------------|
| module.exports | Object used to export things from a file |
| exports | Shortcut reference to module.exports |
| require() | Imports exported code into another file |
| Default behavior | Each file has its own private scope |

==================================================
💬 In short:
> module.exports allows sharing code between files in Node.js
==================================================
*/
