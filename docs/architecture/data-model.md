# Data & Domain Model Overview

Although v1 is purely marketing, the architecture should anticipate shared entities with the future delivery portal.

## Entities

### User
- Fields: `id`, `name`, `email`, `role` (client | internal | freelancer | annotator), `bio`, `skills`, `location`, `avatar`, `createdAt`.
- Future: connect to auth provider (Cognito/Auth0/custom) and SSO for internal staff.

### Project
- Fields: `id`, `clientId`, `name`, `vertical`, `status`, `summary`, `timeline`, `budgetRange`, `leadSource`.
- Relationships: has many `Assignments`, `Tasks`, `Updates`.

### Assignment
- Fields: `id`, `projectId`, `userId`, `role`, `rate`, `currency`, `hoursAllocated`, `start`, `end`.
- Used to mix internal + freelance contributors per project.

### Task / Work Item
- Fields: `id`, `projectId`, `title`, `type`, `status`, `assigneeId`, `dueDate`.
- Could map to tickets in existing tools (Linear/Jira) via integration.

### Lead
- Captured from `Start Project`, `Contact`, `Freelancer apply` forms.
- Fields: `id`, `type` (project | partner | freelancer | rl-hf), `payload` (JSON), `status` (new, triage, contacted), `sourceUrl`.
- Stored in lightweight database or CRM (Airtable/HubSpot) via API.

### BlogPost
- Fields: `slug`, `title`, `excerpt`, `coverImage`, `tags[]`, `author`, `publishedAt`, `body` (MDX).

### Testimonial
- Fields: `id`, `quote`, `author`, `role`, `company`, `type` (client/freelancer), `avatar`.
- Lives in static content now, moves to CMS later.

## Flows

1. **Client lead**: `Start Project` form → API route → store as `Lead` + email alert → manual follow-up.
2. **Freelancer application**: `/experts` CTA → form capturing skills & availability → stored as `Lead` with type `freelancer`.
3. **RLHF waitlist**: simple email capture block; tag as `rlhf_waitlist` for future marketing.

## Integration Roadmap

- Phase 1: static JSON/MD content, simple API routes writing to local JSON (dev) or Airtable/webhook (prod).
- Phase 2: connect to a headless CMS (Contentful/Sanity) for blog/testimonials/case studies.
- Phase 3: unify with delivery platform DB so authenticated users can hop from marketing site to dashboards.

## Security Considerations

- Validate all form inputs server-side (rate limit, hCaptcha as needed).
- Store secrets using Next.js environment variables (`.env.local`).
- Add email notifications (Resend/Sendgrid) for new leads; ensure auditing for compliance.
