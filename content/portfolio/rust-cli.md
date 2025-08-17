---
title: CSV-Backed To-Do CLI (Rust)
date: 2025-06-25
summary: A tiny, fast command-line to-do manager that persists tasks in a plain CSV file—simple to inspect, easy to version, and zero setup beyond the binary.
---

A tiny, fast command-line to-do manager that persists tasks in a plain CSV file—simple to inspect, easy to version, and zero setup beyond the binary.  

Repo available [on GitHub](https://github.com/nathanmandell99/todo-cli).

**Highlights**
- Add, list, toggle, and initialize tasks via subcommands
- Auto-incrementing task IDs; human-readable storage
- `--create` flag gracefully bootstraps a new CSV on first run
- Robust parsing/serialization with `serde` + `csv`
- Polished CLI UX powered by `clap` (help, version, usage)

**Tech**
- Rust • `clap` • `serde`/`serde_derive` • `csv` • stdlib (`HashMap`, `OpenOptions`)

**Sample usage**
```bash
# Initialize a new list
todo tasks.csv init

# Add a task (creates the file if missing)
todo tasks.csv add "Write portfolio blurb" --create

# Show tasks
todo tasks.csv list

# Toggle completion by ID
todo tasks.csv toggle 3
```
**Why this project?**
I wanted a minimal, portable task tool that favors transparency (CSV over a DB) while showcasing idiomatic Rust CLI patterns, error handling, and file I/O. The result is a compact utility that’s easy to audit, script, and commit to git.
