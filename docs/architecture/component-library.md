# Component Library Blueprint

Every section is a composable React component under `src/components`. Components should be presentational, accept data via props, and follow Dusk UI spacing/gradients.

## Layout

| Component | Responsibility | Notes |
| --- | --- | --- |
| `PageShell` | Wraps page content with `<Header />`, `<Footer />`, metadata defaults | Accepts `children`, optional `className` |
| `Header` | Navigation, mobile menu, CTA button | Add `Employee login` / `Freelancer login` placeholders |
| `FooterPrimary` | Global footer variant with newsletter form | Link to legal routes |

## Hero Variants

| Component | Variant | Props |
| --- | --- | --- |
| `HeroMain` | Hero 3 pattern for home | `eyebrow`, `title`, `description`, `primaryCta`, `secondaryCta`, `image` |
| `HeroServices` | Hero 2 pattern | `title`, `description`, `stats`, `cta` |
| `HeroExperts` | Hero 1 pattern | `title`, `description`, `cta`, `secondaryCta` |

## Sections

| Component | Purpose | Key Props |
| --- | --- | --- |
| `LogoCloud` | Show partner logos + caption | `heading`, `logos[]`, `supportingText` |
| `FeatureGrid` | 3-card feature summary | `features[] {icon, title, body}` |
| `FeatureWithMockup` | Text + mockup image section | `title`, `body`, `bullets`, `image` |
| `StatsStacked` | Left intro + stacked stats cards | `heading`, `description`, `stats[] {label, value}` |
| `StatsStrip` | Horizontal metrics row | same as above |
| `ProcessSteps` | Numbered steps row | `steps[] {title, body}` |
| `ProcessTimeline` | Alternating steps with images/headshots | `items[] {title, copy, media}` |
| `TestimonialsWall` | Bubble wall quotes | `quotes[] {quote, author, role}` |
| `TestimonialQuote` | Single large quote card | `quote`, `author`, `role`, `image` |
| `VerticalCards` | Services/vertical grid | `cards[] {title, body, pill}` |
| `TeamHighlight` | Remote team highlight section | `members[] {name, role, avatar}` |
| `TeamGrid` | Advisors/contributors grid | same |
| `BlogTeaserGrid` | 3-card teaser with CTA | `posts[] {title, excerpt, href, tag}` |
| `BlogTopicStrip` | 4-card blog listing variant | extends `posts[]`
| `FaqSection` | Accordion | `items[] {question, answer}` |
| `CtaStrip` | Hard CTA gradient bar | `heading`, `body`, `primaryCta`, `secondaryCta` |
| `CtaGlowForm` | Form with gradient background | `title`, `description`, `fields[]`, `submitLabel` |
| `ContactSupportForm` | Contact/support layout | `contacts[]`, `formFields[]` |

## UI Primitives

| Component | Notes |
| --- | --- |
| `Button` | Handles gradient + outline variants |
| `Badge` | Eyebrow/pill styling |
| `GradientCard` | Shared wrapper for section cards with border + glow |
| `SectionHeading` | Consistent heading + subheading treatment |

## Content Strategy

- Keep sample content in `content/` JSON/TS modules for easy swapping later.
- Centralize nav links, CTA copy, and stats in `/src/content/site.ts` to avoid duplication.

## Extensibility

- Each component should export a `data` TypeScript type to enable static typing when pulling from CMS later.
- Keep animation logic optional (disabled by default for SSR safety).
