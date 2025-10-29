/*
==================================================
📦 WHAT IS npm init ?
==================================================

🧠 Definition:
--------------
`npm init` is a command that initializes a new Node.js project.
It creates a file called `package.json` that stores project details,
dependencies, and scripts.

npm = Node Package Manager (manages libraries and tools)

==================================================
⚙️ HOW TO USE IT
==================================================

# Step 1: Create a new folder
$ mkdir myapp
$ cd myapp

# Step 2: Initialize npm
$ npm init

This starts an interactive setup asking for:
- package name
- version
- description
- entry point (default: index.js)
- author
- license

Example questions:
-------------------
package name: (myapp)
version: (1.0.0)
description: My first Node project
entry point: (index.js)
author: Kaif
license: (ISC)

==================================================
⚡ SHORTCUT
==================================================
If you want to skip all questions, use:
$ npm init -y

This creates package.json instantly with default values.

==================================================
📘 WHAT package.json CONTAINS
==================================================

{
  "name": "myapp",
  "version": "1.0.0",
  "description": "My first Node project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Kaif",
  "license": "ISC"
}

==================================================
🧩 WHY package.json IS IMPORTANT
==================================================
- Stores all your project info and dependencies.
- Allows `npm install` to rebuild your project easily.
- Keeps your project organized and portable.
- Required for installing libraries like express, mongoose, etc.

==================================================
🚀 COMMON COMMANDS
==================================================
| Command | Purpose |
|----------|----------|
| npm init | Start guided setup |
| npm init -y | Auto-create package.json with defaults |
| npm install <package> | Install new dependency |
| npm start | Run start script defined in package.json |

==================================================
📒 SUMMARY
==================================================
✅ npm init → Creates package.json  
✅ package.json → Describes your project  
✅ npm install → Installs required packages  
✅ npm start → Runs your app

In short:
> npm init sets up the foundation of every Node.js project 🚀
==================================================
*/
