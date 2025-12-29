# Todo List App

A clean, routed todo list with local persistence and a stats dashboard. Built with React, TypeScript, Vite, and styled-components.

## Features

- Add todos with a title and description
- Toggle completion state and delete items
- Filter by all, active, and completed
- Stats page with totals and completion rate
- LocalStorage persistence

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- styled-components

## Getting Started

```bash
yarn
yarn dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

```bash
yarn dev
yarn build
yarn preview
yarn lint
```

## Routes

- `/` - all todos
- `/active` - active todos only
- `/completed` - completed todos only
- `/stats` - totals and completion rate

## Project Structure

```
src/
  components/
    Layout.tsx
    TodoInput.tsx
    TodoItem.tsx
    TodoList.tsx
  hooks/
    useTodos.tsx
  pages/
    TodoPage.tsx
    StatsPage.tsx
  App.tsx
  main.tsx
```

## Notes

- Todos are stored under the `todo-list` key in LocalStorage.
