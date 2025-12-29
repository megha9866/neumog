# Neumog v1 Site Map

Marketing app only (portals planned later). URLs assume Next.js App Router (app directory) with static generation where possible.

## Top-Level Routes

1. `/` – Home
2. `/how-it-works`
3. `/services`
4. `/experts`
5. `/case-studies` (placeholder)
6. `/blog`
7. `/blog/[slug]`
8. `/contact`
9. `/start-project`
10. `/legal/terms`
11. `/legal/privacy`

## Home (`/`)

Sections (ordered):
1. **HeroMain** – "Hybrid product teams, on demand" (Hero 3 variant)
2. **LogoCloudPrimary** – placeholder logos + "Dozens of companies…"
3. **FeatureGrid** – "Why Neumog works" (managed delivery, vetted experts, flexible engagement)
4. **FeatureWithMockup** – transparency & analytics vision
5. **StatsStacked** – core proof metrics
6. **TestimonialsWall** – quotes from clients + freelancers
7. **Vertical highlight cards** – e-com, hospitality, delivery, local services, RLHF teaser
8. **ProcessSteps** – 4-step delivery overview
9. **TeamHighlight** – remote-focused core team
10. **BlogTeaserGrid** – latest articles
11. **FAQ (short)** – 3–4 top questions
12. **CtaStrip** – "Start your next product"
13. **FooterPrimary**

## How Neumog Works (`/how-it-works`)

- Hero (reuse Hero 3 with process framing)
- Logo cloud variant with quote
- Long-form copy blocks describing hybrid team orchestration
- Process timeline (mix of ProcessSteps + ProcessTimeline components)
- Transparency/analytics feature block
- Stats strip (horizontal numbers)
- Testimonial quote block (long-form)
- FAQ full list
- CTA (Get Proven Results pattern)

## Services (`/services`)

- HeroServices (Hero 2 variant)
- Vertical cards (e-com, hospitality, delivery, local services)
- Coming soon RLHF/data annotation highlight
- Feature sections for each vertical (reusing Landingfolio inspiration patterns)
- Support all devices / platform vision block
- CTA to start project

## Experts (`/experts`)

- HeroExperts (Hero 1 variant)
- Value props (income, serious products, flexible load)
- Freelancer onboarding steps (How Landingfolio works pattern)
- Testimonial (freelancer quote)
- FAQ tailored to experts
- CTA to apply / join waitlist

## Case Studies (`/case-studies`)

- Placeholder hero + copy
- Reuse testimonial quote + stats cards as stand-in for future case grids

## Blog (`/blog` + `/blog/[slug]`)

- Blog hero + filters (static for now)
- Post cards using BlogTopicStrip / BlogTeaserGrid components
- Dynamic `[slug]` page renders MDX/placeholder article with hero image, metadata, share CTA, next/previous links.

## Contact (`/contact`)

- ContactSupportForm component (Need help layout)
- Company contact details + map placeholder

## Start Project (`/start-project`)

- CtaGlowForm layout (copy left, gradient form right)
- Form fields: name, email, company, project type, budget range, timeline, message
- Submission currently posts to placeholder (console/log only)

## Footer / Global

- Header nav links: How it works, Services, Experts, Blog, Start project
- Footer columns: Company, Work, Resources, Legal, CTA to newsletter

## Future Internal/Portal Links

- Add nav CTAs (non-functional yet): `Employee Login`, `Freelancer Login`
- For now they can open contact/start forms.
