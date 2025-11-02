/*
==================================================
⚙️ NODE.JS VERSIONING — COMPLETE NOTES
==================================================

🧠 DEFINITION:
---------------
Versioning in Node.js follows Semantic Versioning (SemVer)
to track changes, features, and compatibility.

Format:
--------
vMAJOR.MINOR.PATCH

Example:
--------
v18.16.0
 MAJOR = 18 → major release (breaking changes)
 MINOR = 16 → new features
 PATCH = 0  → bug fixes / security patches

==================================================
⚙️ TYPES OF UPDATES:
--------------------------------------------------
| Type | Example | Meaning |
|-------|----------|----------|
| MAJOR | 18 → 19 | Breaking changes |
| MINOR | 18.15 → 18.16 | New features (safe) |
| PATCH | 18.16.0 → 18.16.1 | Bug fixes (safe) |

==================================================
⚙️ LTS vs CURRENT:
--------------------------------------------------
LTS (Long-Term Support):
- Stable and recommended for production.
- Supported ~30 months.
- Example: v18 (Hydrogen), v20 (Iron)

Current:
- Latest features, updated every 6 months.
- Not recommended for production.

==================================================
⚙️ VERSIONING IN package.json:
--------------------------------------------------
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "~6.9.0"
}

Symbols:
---------
^ → Allows minor & patch updates (safe)
~ → Allows patch updates only
(no symbol) → Exact version only

==================================================
⚙️ MANAGING NODE VERSIONS:
--------------------------------------------------
# Check version
node -v

# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# Use commands
nvm install 20
nvm use 20
nvm ls

==================================================
⚙️ RELEASE SCHEDULE:
--------------------------------------------------
- New major version every 6 months.
- Each becomes LTS after 6 months.
- Supported ~2.5 years.

Example:
---------
| Release | Codename | LTS Start | Maintenance End |
|----------|-----------|------------|------------------|
| 18.x | Hydrogen | Oct 2022 | Apr 2025 |
| 20.x | Iron | Oct 2023 | Apr 2026 |

==================================================
💬 IN SHORT:
--------------------------------------------------
✅ Node.js uses Semantic Versioning: MAJOR.MINOR.PATCH  
✅ LTS = Stable for production  
✅ Use nvm to manage multiple versions  
✅ package.json uses ^ and ~ for dependency versioning

==================================================
END OF NOTES
==================================================
*/
