# Mini Client Dashboard

A frontend-focused mini SaaS-style client dashboard built using React and Vite.

## Features

- Users dashboard with list view
- User details page
- Loading, error, and empty states
- Client-side search by name and email
- Responsive UI (mobile & desktop)

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Fetch API

## Setup Instructions

```bash
pnpm install
pnpm run dev
```

## Approach & Decisions

Used functional components and React hooks

Separated API logic into service files

Implemented a custom hook for data fetching and state handling

Created reusable UI components for common states

Focused on clean UI, responsiveness, and user experience

## Assumptions

User status is mocked as "Active" since the API does not provide status

API is read-only

## Improvements With More Time

Skeleton loaders

Pagination
