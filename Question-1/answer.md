# Node.js Internals – Theory

## Node.js Architecture

Node.js is built to handle many tasks at the same time without waiting for one task to finish before starting another.  
It uses a **single-threaded, non-blocking** architecture.

Main parts of Node.js architecture:
- JavaScript Engine (V8)
- Node.js Core APIs
- Native Bindings
- Event Loop
- libuv

All these components work together to make Node.js fast and efficient.

---

## JavaScript Engine (V8)

- V8 is the JavaScript engine developed by Google.
- It converts JavaScript code into machine code that the computer can understand.
- V8 executes JavaScript very fast.
- Node.js uses V8 to run JavaScript outside the browser.

Example:
- When you write `console.log("Hello")`, V8 executes this code.

---

## Node.js Core APIs

- Core APIs are built-in features provided by Node.js.
- They allow us to do things like:
  - Read/write files
  - Create servers
  - Handle HTTP requests
- These APIs are written mostly in JavaScript.

Examples:
- `fs` module for file system
- `http` module for creating servers

---

## Native Bindings

- Native bindings connect JavaScript code with low-level system code.
- They act as a bridge between JavaScript and C/C++ code.
- They help Node.js talk to the operating system.

Example:
- When JavaScript requests a file read, native bindings pass that request to libuv.

---

## Event Loop

- The event loop is the heart of Node.js.
- It decides **which task should be executed next**.
- It allows Node.js to perform non-blocking operations.

How it works:
- Tasks are added to queues
- Event loop picks tasks one by one
- Executes callbacks when operations are complete

---

## libuv

### What is libuv?
- libuv is a C library used by Node.js.
- It handles asynchronous operations.
- It manages the event loop and thread pool.

---

### Why Node.js needs libuv
- JavaScript alone cannot handle low-level system tasks.
- libuv helps Node.js perform:
  - File system operations
  - Network operations
  - Timers

Without libuv, Node.js would not be non-blocking.

---

### Responsibilities of libuv
- Managing the event loop
- Handling asynchronous I/O
- Managing the thread pool
- Communicating with the operating system

---

## Thread Pool

### What is a thread pool?
- A thread pool is a group of background threads.
- These threads handle heavy or blocking tasks.
- Default size of thread pool is 4 threads.

---

### Why Node.js uses a thread pool
- Node.js runs JavaScript in a single thread.
- Some operations are slow and blocking.
- Thread pool allows these operations to run in the background.

---

### Operations handled by the thread pool
- File system operations (`fs`)
- Cryptography tasks
- Compression


---

## Worker Threads

### What are worker threads?
- Worker threads allow running JavaScript in multiple threads.
- Each worker thread has its own event loop.
- Used for CPU-intensive tasks.

---

### Why are worker threads needed?
- Some tasks require heavy computation.
- Running them on the main thread can block the event loop.
- Worker threads keep the main thread responsive.

---

### Difference between Thread Pool and Worker Threads

-Thread Pool - Used internally by Node.js
-Worker Threads -Created by developers 
-Thread Pool-Handles background tasks
-Worker Threads-Handles CPU-heavy JavaScript 
-Thread Pool-Limited number of threads 
-Worker Threads-Can create multiple workers 
-Thread Pool-Not directly controlled 
-Worker Threads-Controlled using `worker_threads` 

---

## Event Loop Queues

### Macro Task Queue
- Contains larger tasks.
- Tasks are executed one at a time.

Examples:
- `setTimeout`
- `setInterval`
- I/O callbacks
- `setImmediate`

---

### Micro Task Queue
- Contains smaller, high-priority tasks.
- Always executed before macro tasks.

Examples:
- `Promise.then`
- `process.nextTick`

---

### Execution Priority
1. Micro Task Queue
2. Macro Task Queue

Micro tasks are always executed first, even if macro tasks are waiting.

**End of Answer**
