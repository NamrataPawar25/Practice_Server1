"# Practice_Server1" 
**🌐 What is Node.js?**

Node.js is a JavaScript runtime environment → it lets you run JS outside the browser (on your computer/server).

Built on Google Chrome’s V8 engine (the same engine Chrome uses to run JS fast).

It provides built-in modules (like http, fs, path) so you can build servers, APIs, CLI tools, etc.

👉 In short: Node.js = JavaScript on the server side.

**🚀 Why is Node.js Popular?**
1. JavaScript everywhere

Before Node, JS was only for browsers.

With Node.js, developers can use one language (JavaScript) for both frontend and backend.

2. Fast and scalable

Uses V8 engine → very fast execution.

Non-blocking I/O + event-driven architecture → handles thousands of requests efficiently.

3. Huge ecosystem (npm)

Comes with npm (Node Package Manager), the world’s largest open-source library repository.

You can install packages for almost anything (databases, authentication, APIs, real-time apps).

4. Real-time applications

Perfect for apps like chats, gaming, streaming, live dashboards → because of WebSockets and event-driven design.

5. Cross-platform

Runs on Windows, Linux, macOS.

Can even be bundled into desktop apps (with Electron).

**📦 Where Node.js is Used**

Web servers & REST APIs (Express.js)

Real-time apps (WhatsApp Web, Slack, Discord)

Streaming apps (Netflix backend uses Node)

Command-line tools (npm itself is built with Node)

Microservices

**🛠️ How to Install Node.js**
1. Download

Go to the official site 👉 https://nodejs.org

You’ll see two versions:

LTS (Long Term Support) → stable, recommended for most users.

Current → latest features, may not be as stable.

Choose LTS if you’re just starting.

2. Install

Run the installer (it also installs npm, Node’s package manager).

Click Next → Next → Finish.

3. Verify Installation

Open your terminal / command prompt and run:

node -v

**📦 What are Core Modules in Node.js?**

Core modules are built-in modules that come with Node.js installation → no need to install them with npm.
You just load them with require().

🔑 Common Core Modules
Module	Purpose
http: Create web servers & handle HTTP requests/responses
fs: (File System)	Work with files (read, write, update, delete)
path:	Handle and transform file paths
os:	Get OS info (CPU, memory, platform, etc.)
url:	Parse and format URLs
querystring:	Work with query strings in URLs
events:	Handle and emit custom events
stream:	Work with streaming data (video, audio, files)
buffer:	Handle binary data directly
crypto:	Encryption, hashing, security functions
util:	Utility functions (e.g., debugging, formatting)
dns:	Perform DNS lookups (resolve domains to IPs)
net:	Create TCP/IPC servers and clients
timers:	Provides functions like setTimeout, setInterval
