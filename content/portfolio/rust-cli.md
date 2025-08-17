---
title: CSV-Backed To-Do CLI (Rust)
date: 2025-06-25
summary: A tiny, fast command-line to-do manager that persists tasks in a plain CSV file—simple to inspect, easy to version, and zero setup beyond the binary.
---

[Repo](https://github.com/nathanmandell99/todo-cli)

A tiny, fast command-line to-do manager that persists tasks in a plain CSV file—simple to inspect, easy to version, and zero setup beyond the binary.  

**Highlights**
- Add, list, toggle, and initialize tasks via subcommands
- Auto-incrementing task IDs; human-readable storage
- `--create` flag gracefully bootstraps a new CSV on first run
- Robust parsing/serialization with `serde` + `csv`
- Polished CLI UX powered by `clap` (help, version, usage)

**Tech**
- Rust • `clap` • `serde`/`serde_derive` • `csv` • stdlib (`HashMap`, `OpenOptions`)

**Why this project?**
I wanted a minimal, portable task tool that favors transparency (CSV over a DB) while showcasing idiomatic Rust CLI patterns, error handling, and file I/O. The result is a compact utility that’s easy to audit, script, and commit to git.

**Sample usage**
```bash
# Initialize a new list
todo tasks.csv init
```
![init](/img/todo-cli/init.gif)

```bash
# Add a task (creates the file if missing)
todo tasks.csv add "Write portfolio blurb" --create
```
![add](/img/todo-cli/create-task.gif)

```bash
# Show tasks
todo tasks.csv list
```
![list](/img/todo-cli/list-tasks.gif)

```bash
# Toggle completion by ID
todo tasks.csv toggle 3
```
![list](/img/todo-cli/toggle.gif)
