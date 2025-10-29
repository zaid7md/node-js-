/*
==================================================
🌐 TOTAL PORTS IN NETWORKING & NODE.JS
==================================================

🧠 TOTAL PORTS:
---------------
- There are 65,536 ports in total.
- Range: 0 to 65535.
- Because ports are 16-bit unsigned integers → 2^16 = 65,536.

==================================================
⚙️ PORT RANGES
--------------------------------------------------
| Range | Type | Description |
|--------|------|--------------|
| 0–1023 | Well-known ports | Used by system services (HTTP, SSH, DNS) |
| 1024–49151 | Registered ports | Used by applications and databases |
| 49152–65535 | Dynamic/Private ports | Temporary (used by clients like browsers) |

==================================================
🧩 EXAMPLES:
--------------------------------------------------
| Port | Service | Description |
|------|----------|-------------|
| 20, 21 | FTP | File Transfer |
| 22 | SSH | Secure Shell |
| 25 | SMTP | Email sending |
| 53 | DNS | Domain lookup |
| 80 | HTTP | Web traffic |
| 443 | HTTPS | Secure web traffic |
| 3306 | MySQL | Database |
| 5432 | PostgreSQL | Database |
| 8080, 3000 | Custom | Web development |
| 65535 | Max port number | Highest possible port |

==================================================
⚙️ PORT BEHAVIOR:
--------------------------------------------------
- Ports 0–1023 → Require admin/root privileges.
- 1024–65535 → Free to use for apps (like Node.js).
- Each connection uses a unique (IP + Port) pair.
- Multiple apps cannot use the same port on one IP simultaneously.

==================================================
⚡ NODE.JS CONTEXT:
--------------------------------------------------
server.listen(3000);
→ Server listens for incoming requests on port 3000.

Commonly used ports:
--------------------
3000, 4000, 5000, 8080 → Developer web servers

==================================================
💬 SUMMARY:
--------------------------------------------------
✅ Total ports: 0–65535 (65,536 total)
✅ 0–1023: System services
✅ 1024–49151: Application/Registered
✅ 49152–65535: Dynamic client ports
✅ Node.js apps use ports like 3000, 4000, 8080

==================================================
END OF NOTES
==================================================
*/
