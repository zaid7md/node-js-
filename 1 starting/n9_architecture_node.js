/*
==================================================
🧠 NODE.JS THREAD MODEL — SYNC vs ASYNC
==================================================

⚙️ 1️⃣ SYNCHRONOUS TASKS
--------------------------------------------------
- Run on the MAIN THREAD (V8 engine).
- Node.js is single-threaded → one Call Stack.
- Each task runs line by line; the next one waits.
- If a task takes long → it blocks the entire thread.

Example:
---------
const data = fs.readFileSync("file.txt", "utf8");
console.log("done");

🧩 The main thread waits for file to finish reading.
No other operation runs during this time.

==================================================
⚙️ 2️⃣ ASYNCHRONOUS TASKS
--------------------------------------------------
- Delegated to libuv’s THREAD POOL or OS Kernel.
- Non-blocking: main thread keeps running.
- libuv handles the background work using C++ threads.

Thread Pool:
------------
- Default size = 4 threads
- Used for:
   • File System (fs)
   • Crypto
   • DNS lookups

OS Kernel (non-blocking I/O):
-----------------------------
- Used for:
   • Network operations (HTTP, TCP, UDP)
   • No extra thread needed
   • Uses OS-level event notifications

==================================================
⚙️ 3️⃣ FLOW SUMMARY
--------------------------------------------------
1. JS code runs in main thread (Call Stack).
2. Async tasks sent to libuv thread pool or OS.
3. When done → results go to Callback Queue.
4. Event Loop moves them back to Call Stack when free.

==================================================
🧩 4️⃣ VISUAL MODEL
--------------------------------------------------
[ MAIN THREAD (V8) ]
     ↓ delegates async tasks ↓
[ libuv THREAD POOL (4x threads) ]
     ↓ completed results ↓
[ CALLBACK QUEUE ]
     ↓
[ EVENT LOOP ] → pushes callback to main thread

==================================================
🧾 5️⃣ SUMMARY TABLE
--------------------------------------------------
| Task Type | Example | Handled By | Threads | Blocking |
|------------|----------|-------------|-----------|-----------|
| Synchronous | fs.readFileSync | Main Thread | 1 | Yes |
| Async (File) | fs.readFile | libuv Thread Pool | Multiple | No |
| Async (Network) | HTTP, TCP | OS Kernel | Non-blocking | No |
| Async (Timers) | setTimeout | Event Loop | 1 (main) | No |

==================================================
💬 6️⃣ IN SHORT
--------------------------------------------------
✅ Synchronous → One main thread (blocking)
✅ Asynchronous → Delegated to libuv or OS (non-blocking)
✅ Event Loop → Brings results back when main thread is free

==================================================
END OF NOTES
==================================================
*/


/*
==================================================
!🧠 NODE.JS COMPLETE ARCHITECTURE, FLOW & TASK HANDLING
==================================================

==================================================
⚙️ 1️⃣ OVERVIEW
==================================================
Node.js is a **JavaScript runtime environment** built on **Chrome’s V8 engine**.
It allows JavaScript to run **outside the browser**, primarily on servers.

It follows a **single-threaded, non-blocking, event-driven architecture**,
which makes it highly efficient for I/O-heavy tasks.

Core Components:
----------------
1. V8 Engine → Executes JavaScript code.
2. libuv → Provides Event Loop, Thread Pool, and async I/O handling.
3. Event Loop → Controls execution flow and callback scheduling.
4. Node APIs → Provide interfaces for fs, http, crypto, etc.
5. Event Queue (Callback Queue) → Holds completed async callbacks.

==================================================
⚙️ 2️⃣ HOW NODE.JS EXECUTES CODE
==================================================
1. JS code runs on **a single thread** (Call Stack).
2. Synchronous (blocking) code executes line-by-line.
3. Asynchronous (non-blocking) tasks are **delegated to libuv** or **OS kernel**.
4. When async work completes, results go into the **Callback Queue**.
5. **Event Loop** continuously checks if Call Stack is empty.
6. When empty, it moves one callback from queue → Call Stack → executes it.

==================================================
⚙️ 3️⃣ SYNCHRONOUS (BLOCKING) TASKS
==================================================
🧩 Description:
- Executed directly on the **main thread**.
- Each line runs one after another.
- If a function takes long, it blocks everything else.

Example:
--------
const fs = require('fs');
console.log("Start");
const data = fs.readFileSync('file.txt', 'utf8'); // blocking
console.log("File read complete");
console.log("End");

Flow:
-----
- JS engine executes commands sequentially.
- fs.readFileSync() blocks until reading finishes.
- Event Loop pauses until it returns.

Internally:
------------
- V8 executes directly using Node’s C++ binding.
- No libuv thread pool is used.
- Event Loop is idle until operation completes.

Result:
-------
Simple but slow — not suitable for servers with multiple clients.

==================================================
⚙️ 4️⃣ ASYNCHRONOUS (NON-BLOCKING) TASKS
==================================================
🧩 Description:
- Node.js delegates I/O operations to libuv or OS kernel.
- JS thread continues running other code.
- Once the async work is done, callback/promise is queued.
- Event Loop executes it when Call Stack is free.

Example:
--------
const fs = require('fs');
console.log("Start");
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("File read complete");
});
console.log("End");

Output:
-------
Start
End
File read complete

Explanation:
------------
- fs.readFile() sent to libuv thread pool.
- Main thread continues executing.
- When reading finishes, callback is pushed to Callback Queue.
- Event Loop later executes callback.

==================================================
⚙️ 5️⃣ NODE.JS ARCHITECTURE FLOW
==================================================
1. **V8 Engine** executes JavaScript in the Call Stack.
2. **libuv** provides:
   - Event Loop
   - Thread Pool (4 threads by default)
   - Async I/O management
3. **Event Loop** continuously checks:
   - Is the Call Stack empty?
   - Are there callbacks waiting?
4. **Callback Queue** stores async results waiting to be run.
5. **OS Kernel** handles network I/O (HTTP, TCP, UDP) asynchronously.

==================================================
⚙️ 6️⃣ EVENT LOOP ROLE
==================================================
Phases of the Event Loop:
-------------------------
1. **Timers Phase** → Executes setTimeout / setInterval callbacks.
2. **Pending Callbacks** → Executes deferred I/O callbacks.
3. **Idle/Prepare** → Internal tasks.
4. **Poll Phase** → Retrieves new I/O events.
5. **Check Phase** → Executes setImmediate callbacks.
6. **Close Callbacks** → Handles socket/file close events.

Flow Summary:
-------------
- Async tasks go to libuv / OS.
- Once complete → callback goes to the proper queue.
- Event Loop checks the queue and runs callbacks when stack is free.

==================================================
⚙️ 7️⃣ THREAD MODEL
==================================================
Node.js uses two key threading layers:

1️⃣ **Main Thread (Single Thread)**
   - Runs all JS code (synchronous tasks).
   - Managed by the V8 engine.

2️⃣ **libuv Thread Pool (Multi-Threaded)**
   - Handles asynchronous I/O operations.
   - Default: 4 threads (configurable via UV_THREADPOOL_SIZE).
   - Used for fs, crypto, DNS, etc.

🧩 Network I/O (HTTP/TCP) → handled directly by OS kernel (no thread pool).

==================================================
⚙️ 8️⃣ FLOW VISUALIZATION
==================================================

           ┌──────────────────────────────┐
           │     MAIN THREAD (V8)        │
           │ Executes JS (Call Stack)    │
           └───────────┬─────────────────┘
                       │
            ┌──────────┴────────────┐
            │   ASYNC OPERATIONS    │
            │  (libuv + OS Kernel)  │
            └──────────┬────────────┘
                       │
        ┌──────────────┴────────────────┐
        │      libuv THREAD POOL        │
        │ (fs, crypto, DNS operations)  │
        └──────────────┬────────────────┘
                       │
            ┌──────────┴────────────┐
            │     CALLBACK QUEUE    │
            │ (Completed tasks wait)│
            └──────────┬────────────┘
                       │
                🔁 EVENT LOOP
        (Moves callbacks → Call Stack when ready)

==================================================
⚙️ 9️⃣ COMPONENT RESPONSIBILITIES
==================================================
| Component | Responsibility |
|------------|----------------|
| V8 Engine | Executes JS code |
| Call Stack | Holds executing functions |
| Event Loop | Schedules and manages callbacks |
| Callback Queue | Stores finished async tasks |
| libuv Thread Pool | Executes async I/O tasks |
| OS Kernel | Handles network I/O |

==================================================
🧾 🔟 SUMMARY TABLE
==================================================
| Type | Example | Handled By | Threads | Blocking? |
|------|----------|-------------|----------|------------|
| Synchronous | fs.readFileSync() | Main Thread (V8) | 1 | ✅ Yes |
| Async File I/O | fs.readFile() | libuv Thread Pool | Multiple | ❌ No |
| Async Network | HTTP, TCP | OS Kernel | Non-blocking | ❌ No |
| Timers | setTimeout() | Event Loop (Timers phase) | 1 | ❌ No |

==================================================
💬 11️⃣ WHY THIS DESIGN IS POWERFUL
==================================================
✅ Non-blocking → Handles thousands of clients efficiently.  
✅ Event-driven → Perfect for APIs and real-time apps.  
✅ Lightweight → Uses minimal threads and memory.  
✅ Scalable → Async I/O allows massive concurrency.

Best Use Cases:
---------------
- REST APIs and microservices
- Real-time apps (chat, gaming)
- File streaming servers
- Proxy servers / gateways

==================================================
📒 12️⃣ IN SHORT
==================================================
🧠 Node.js Architecture Summary:
--------------------------------
- Single-threaded JavaScript engine (V8)
- Asynchronous & non-blocking via libuv
- Uses Event Loop + Thread Pool for concurrency
- Delegates I/O to background threads or OS
- Event Loop manages callback scheduling
- High performance for I/O-bound operations

==================================================
END OF COMPLETE NODE.JS NOTES
==================================================
*/


/*
==================================================
!⚙️ NODE.JS TASK HANDLING — FULL EXPLANATION
==================================================

🧠 KEY IDEA:
-------------
- Node.js has ONE main thread for executing JavaScript.
- Synchronous tasks run directly on this main thread → blocking.
- Asynchronous tasks are offloaded to libuv’s thread pool or OS kernel → non-blocking.

==================================================
1️⃣ SYNCHRONOUS TASKS (BLOCKING)
==================================================
- Executed directly on the MAIN THREAD (Call Stack).
- Each task waits for the previous one to finish.
- The Event Loop cannot run while main thread is busy.
- Example: fs.readFileSync(), crypto.randomBytesSync().

Flow:
-----
console.log("Start");
const data = fs.readFileSync("file.txt", "utf8"); // blocks
console.log("End");

Output:
Start
End (after file reading finishes)

==================================================
2️⃣ ASYNCHRONOUS TASKS (NON-BLOCKING)
==================================================
- Offloaded to libuv THREAD POOL or OS KERNEL.
- Main thread continues executing JS.
- Once task completes, callback added to CALLBACK QUEUE.
- EVENT LOOP moves callback → Call Stack when free.

Flow:
-----
console.log("Start");
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("File read complete");
});
console.log("End");

Output:
Start
End
File read complete

==================================================
3️⃣ INTERNAL COMPONENTS
==================================================
| Component | Responsibility |
|------------|----------------|
| V8 Engine | Executes JS synchronously |
| Call Stack | Holds functions currently executing |
| libuv Thread Pool | Handles async I/O (fs, crypto, DNS) |
| OS Kernel | Handles async network I/O (HTTP, TCP) |
| Callback Queue | Stores completed async callbacks |
| Event Loop | Moves callbacks to stack when free |

==================================================
4️⃣ EVENT LOOP ROLE
==================================================
- Continuously checks the Call Stack.
- If stack empty → moves one callback from Callback Queue → Stack.
- Executes async callback results on main thread.

==================================================
5️⃣ VISUAL FLOW
==================================================
[Synchronous Task] → Main Thread (blocking)
[Asynchronous Task] → libuv Thread Pool / OS Kernel
           ↓ (after completion)
       Callback Queue → Event Loop → Call Stack (execution)

==================================================
💬 IN SHORT
==================================================
✅ Synchronous = runs on main thread → blocks further code  
✅ Asynchronous = runs in background threads → main thread keeps running  
✅ Event Loop = delivers async results when Call Stack is free

This architecture makes Node.js **fast, scalable, and non-blocking** 🚀
==================================================
END OF NOTES
==================================================
*/
