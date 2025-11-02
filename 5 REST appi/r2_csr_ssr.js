/*
==================================================
⚙️ CLIENT-SIDE vs SERVER-SIDE RENDERING
==================================================

🧠 RENDERING = Generating the HTML content seen by the user.

==================================================
⚙️ CLIENT-SIDE RENDERING (CSR):
--------------------------------------------------
- Rendering happens in the browser.
- Server sends an empty HTML + JS bundle.
- JS fetches data and builds page dynamically.

Example:
---------
<html>
  <div id="root"></div>
  <script src="main.js"></script>
</html>

✅ Pros:
- Very interactive.
- No full reload between pages.

❌ Cons:
- Slower initial load.
- Poor SEO.
- Heavy client CPU use.

Used in:
- React, Angular, Vue SPA apps.

==================================================
⚙️ SERVER-SIDE RENDERING (SSR):
--------------------------------------------------
- Server prepares full HTML before sending.
- Browser receives ready-to-display page.

Example:
---------
app.get('/', (req, res) => {
  res.render('home', { name: "Kaif" });
});

✅ Pros:
- Faster first paint.
- Great SEO.
- Content visible immediately.

❌ Cons:
- Higher server load.
- Full reload on every request.

Used in:
- Next.js, Nuxt.js, EJS templates.

==================================================
⚙️ KEY DIFFERENCES:
--------------------------------------------------
| Feature | CSR | SSR |
|----------|-----|-----|
| Rendering | Browser | Server |
| First load | Slower | Faster |
| SEO | Poor | Good |
| Interactivity | High | Medium |
| Use case | Web apps | Content sites |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ CSR → Client builds the page with JS.
✅ SSR → Server builds and sends full HTML.
✅ Modern frameworks (Next.js) mix both for best results.

==================================================
END OF NOTES
==================================================
*/
