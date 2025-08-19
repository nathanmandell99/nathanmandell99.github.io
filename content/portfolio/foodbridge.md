---
title: FoodBridge Donation Matcher
date: 2025-02-09
summary: A hackathon-built platform that connects local donors with nearby food pantries. I owned the **React** UI which helped food pantries see potential donors and put out requests for specific products.  
---

**Repos**
- [UI](https://github.com/FoodBridge-2025/foodbridge-ui)
- [All](https://github.com/orgs/FoodBridge-2025/repositories)

A hackathon-built platform that connects local donors with nearby food pantries. I owned the **React** UI which helped food pantries see potential donors and put out requests for specific products.  

**What we shipped (multi-repo)**
- **Web UI** — React front end for donors/pantries (my scope). Org overview lists the UI alongside other services.   
- **Backend service** — Python API for pantries/donations consumed by the UI and mobile app.   
- **Gen-AI agent** — Experimental Python/Flask agent and datasets to explore smarter matching.   
- **Android app** — Native Kotlin app for end users. 

**My role (UI emphasis)**
- Built the **list-first** interface for discovering nearby pantries and posting donations quickly.  
- Integrated **OpenStreetMap** for geocoding/lookup and “open in maps” navigation, keeping the app lightweight and accessible.  
- Focused on responsive design, accessible controls, and concise, task-oriented copy.

**Why this project?**  
We aimed for practical impact at DevFest 2025: reduce friction between donors and pantries with a geolocation-aware UI, clear lists over heavy map widgets, and a modular backend/mobile stack the UI can plug into. 

**If We Did This Project Again Today**  
My experience with React in a production setting since this project has sharpened two priorities:  
- [Tanstack-Query](https://tanstack.com/query/docs). This is a lifesaver in terms of sanity, because it keeps your API logic separate from your JSX. A simple useQuery will cache your data for you and allow you to easily display a loading screen or error message, all in a few lines of code.
- **TypeScript.** Typing API payloads and props up front turns shape bugs into compile-time errors. It also massively increases readability and therefore maintainability.
