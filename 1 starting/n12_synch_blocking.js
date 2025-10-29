/*
==================================================
⚙️ NODE.JS — WHY SYNCHRONOUS TASKS BLOCK AT SCALE
==================================================

🧠 THE ISSUE:
-------------
Node.js has only ONE main thread (Call Stack).
If thousands of users send requests that call synchronous (blocking) code,
the main thread executes them ONE-BY-ONE sequentially.

Each blocking operation freezes the event loop until done.
Other users must wait — the entire application appears "stuck."

Example:
---------
http.createServer((req, res) => {
  const data = fs.readFileSync("bigfile.txt", "utf8"); // ❌ Blocking
  res.end(data);
});

➡️ While reading the file, no other requests are handled.

==================================================
💥 CONSEQUENCE:
--------------------------------------------------
- Only one request executes at a time.
- All other requests are queued.
- Performance drops drastically.
- Application feels unresponsive under load.

==================================================
⚙️ SOLUTION — ASYNCHRONOUS I/O
--------------------------------------------------
Use non-blocking APIs:
---------------------
http.createServer((req, res) => {
  fs.readFile("bigfile.txt", "utf8", (err, data) => { // ✅ Non-blocking
    res.end(data);
  });
});

➡️ File read runs in background (libuv thread pool).
➡️ Main thread continues serving other requests.
➡️ Callback executes later when result is ready.

==================================================
⚡ EVENT LOOP ADVANTAGE
--------------------------------------------------
- Main thread handles lightweight JS code.
- Async operations (fs, http, timers) handled by libuv or OS.
- Event Loop ensures callbacks execute when Call Stack is free.
- Thousands of clients served concurrently with minimal resources.

==================================================
⚙️ HANDLING HEAVY COMPUTATION
--------------------------------------------------
Use Worker Threads:
-------------------
const { Worker } = require('worker_threads');
new Worker('./heavyTask.js');

➡️ Moves CPU-heavy tasks off main thread.
➡️ Keeps event loop responsive.

==================================================
🧾 SUMMARY TABLE
--------------------------------------------------
| Type | Handled By | Blocking | Suitable For |
|------|-------------|-----------|----------------|
| Synchronous | Main Thread | ✅ Yes | Small scripts |
| Asynchronous | libuv / OS | ❌ No | Large-scale apps |
| CPU-heavy | Worker Threads | ❌ No | Computation tasks |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ Synchronous = Single main thread → blocks other users  
✅ Asynchronous = Background threads → main thread stays free  
✅ Use async I/O or worker threads for scalability 🚀

==================================================
END OF NOTES
==================================================
*/
