# AI Agent Instructions

## 1) Project Overview
- Project: Song Thao Logistics website (marketing/presentation site).
- Framework: Next.js 14 (App Router) + React 18 + TypeScript.
- Styling/UI: Tailwind CSS, Radix-based UI primitives in `components/ui`.
- Primary goal for changes: keep UX stable, modern, and responsive while making minimal, targeted edits.

## 2) Repository Map
- `app/`: App Router entry files (`layout.tsx`, `page.tsx`, global styles).
- `components/`: Page sections and shared components (header, hero, services, etc.).
- `components/ui/`: Reusable UI primitives; prefer reusing these over creating new ad-hoc UI.
- `lib/`: Utilities (`lib/utils.ts`).
- `public/`: Static assets/images.

## 3) Preferred Change Workflow
1. Read related files first; understand existing patterns before editing.
2. Make the smallest change that solves the request.
3. Keep section/component structure intact unless explicitly asked to refactor.
4. Reuse existing utilities/components before introducing new ones.
5. Avoid dependency changes unless strictly necessary and requested.

## 4) Coding Guidelines
- Use TypeScript-safe patterns; avoid `any` where possible.
- Keep components focused and readable.
- Match existing naming/style conventions in nearby files.
- Preserve responsive behavior across common breakpoints.
- Maintain accessibility basics:
  - semantic elements where appropriate
  - meaningful button/link text
  - image `alt` text when image is content-relevant

## 5) Editing Boundaries
Unless the task explicitly requests it, do **not**:
- restructure the whole app architecture
- rename major files/folders
- change deployment/tooling config (`next.config.mjs`, build scripts, lockfile)
- add/remove packages

## 6) Validation Checklist (Before Finalizing)
- Confirm changed components compile logically and imports are valid.
- Run checks when changes are significant:
  - `pnpm lint`
  - `pnpm build`
- Verify no accidental breakage in core homepage sections:
  - header
  - hero
  - services
  - advantages
  - contact
  - footer

## 7) Communication Style for Agents
- Summarize what was changed and why.
- Call out assumptions and any follow-up recommendations.
- If requirements are ambiguous, ask one focused clarifying question before implementing risky changes.
