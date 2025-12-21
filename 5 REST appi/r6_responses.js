/*
For a GET request, the server can send different types of responses.
What you send depends on what the client expects (browser, frontend app, API consumer).

1) JSON (Most common for APIs)
--------------------------------
Used when frontend, mobile apps, or other services consume data.

Example:
res.json({ id: 1, name: "Umar", role: "student" });

Content-Type: application/json


2) HTML (Web pages)
--------------------
Used when serving a webpage to a browser.

Example:
res.send("<h1>Welcome</h1>");

or:
res.sendFile(__dirname + "/index.html");

Content-Type: text/html


3) Plain Text
--------------
Used for simple responses or health checks.

Example:
res.send("Server is running");

Content-Type: text/plain


4) Status Code Only (No Response Body)
--------------------------------------
Used when no data needs to be returned.

Example:
res.sendStatus(204); // No Content


5) Files (PDF, Image, CSV, etc.)
--------------------------------
Used for file downloads or serving media.

Example:
res.sendFile(__dirname + "/report.pdf");

or:
res.download("data.csv");


6) Redirects
-------------
Used to redirect the client to another route or page.

Example:
res.redirect("/login");


7) Streaming Data (Advanced)
-----------------------------
Used for large files or live data streams.

Example:
res.write("chunk 1");
res.write("chunk 2");
res.end();


8) Custom Headers with Response
--------------------------------
Used when you want to control headers explicitly.

Example:
res
  .status(200)
  .set("Cache-Control", "no-cache")
  .json({ message: "OK" });


Important Notes:
-----------------
- GET requests should only FETCH data.
- GET requests should NOT modify server data.
- JSON is the most common response type for APIs.
*/
