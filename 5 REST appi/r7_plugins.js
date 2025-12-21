/*
A plugin is a small add-on software that extends an existing application
by adding new features without changing the main program.

In simple words:
Plugin = extra feature you attach to an app

Examples:
- Browser plugins: AdBlock (blocks ads), Grammarly (checks grammar)
- WordPress plugins: Add SEO, security, contact forms, etc.
- VS Code plugins (extensions): Add language support, Git tools, themes
- Postman plugins: Add testing, automation, or integrations

Why plugins are used:
- No need to rebuild the whole software
- Install only what you need
- Keeps the main application lightweight

Technical note:
A plugin runs inside a host application and uses its APIs
to safely extend functionality.
*/

/*
!app.use(express.urlencoded({ extended: false }));

What this does:
- It tells Express to read and parse incoming request bodies
  that are sent in application/x-www-form-urlencoded format.
- This is the format used by HTML forms and Postman (x-www-form-urlencoded).

Why it is needed:
- Without this, req.body will be undefined.
- With this middleware, form data becomes available in req.body.

extended: false means:
- Uses the built-in Node.js querystring library.
- Supports simple key=value pairs only.
- Does NOT support nested objects.

Example:
POST body:
name=Zaid&role=Dev

req.body will be:
{
  name: "Zaid",
  role: "Dev"
}

In short:
This line allows Express to handle form data sent from forms or Postman.
*/
