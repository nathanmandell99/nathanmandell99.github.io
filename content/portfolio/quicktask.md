---
title: QuickTask
date: 2025-06-25
summary: A clean, minimal to-do app that runs on the web, iOS, and Android with one codebase. Keep your tasks on one, non-persistent list, so that you know you will complete what you write down. Built to be fast to try, easy to use, and pleasant to look at.
---

A clean, minimal to-do app that runs on the web, iOS, and Android with one codebase. Keep your tasks on one, non-persistent list, so that you know you will complete what you write down. Built to be fast to try, easy to use, and pleasant to look at. 

**Highlights**
- Create tasks with a title (required) and optional short description; keep lists tidy by marking items complete/incomplete.   
- Simple sectioning: active “Tasks” and “Completed,” with one-tap/click toggling.   
- Sensible deletes from either section. 

**Tech**
- Expo / React Native (runs via `npx expo start`), plus Expo Go for quick device testing.   
- TypeScript-first codebase (≈98% TS).   

**Quick start**
```bash
git clone https://github.com/nathanmandell99/QuickTask
cd QuickTask
npm install
npx expo start  # press "w" for web; scan the terminal QR with Expo Go for mobile
```
(Ensure your phone and dev machine share the same Wi-Fi.)

**Why this project?**
QuickTask is a small but complete example of shipping a cross-platform UI with Expo: a typed TS codebase, a frictionless local run loop, and a focused feature set that demonstrates state, basic navigation, and platform reach without extra complexity.
