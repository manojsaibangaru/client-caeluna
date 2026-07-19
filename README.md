# CAELUNA Global — Corporate Website

A modern, responsive marketing website for **Caeluna Technologies Private
Limited** (branded as **CAELUNA**), built to showcase the company's IT
consulting, staffing, and technology services. It's a single scrolling page
with a sticky nav, plus Privacy Policy and Terms & Conditions pages.

This README has two goals: help a developer run the project, and help the
client (non-technical) find exactly which file to open for any future text,
image, or contact-info change.

---

## 1. Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Framer Motion (animations)
- Lucide React Icons

## 2. Running the Project

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
npm run lint      # check code style
```

Requires **Node.js 20.12 or newer** (ideally Node 22 LTS) — older Node
versions will fail to start Vite.

---

## 3. Where to Make Changes

Everything a client would typically want to edit lives in one of these
files. No coding knowledge is needed to change plain text — just edit the
quoted strings between the `"..."` marks and save.

| I want to change...                                   | Edit this file |
|---------------------------------------------------------|----------------|
| Navigation menu links, office details, services, industries, process steps, stats, colors used for icons | `src/utils/data.js` |
| Hero headline, tagline, CTA buttons, floating badges     | `src/components/Hero/Hero.jsx` |
| "About" text, mission/vision/values cards                | `src/components/About/About.jsx` |
| Services cards (icons, titles, descriptions)              | Content lives in `src/utils/data.js` (`services` array); layout in `src/components/Services/Services.jsx` |
| "Why Choose Us" cards                                     | Content in `src/utils/data.js` (`whyChooseUs`); layout in `src/components/WhyChooseUs/WhyChooseUs.jsx` |
| Industries served                                          | Content in `src/utils/data.js` (`industries`); layout in `src/components/Industries/Industries.jsx` |
| "How We Work" roadmap steps                                | Content in `src/utils/data.js` (`processSteps`); layout in `src/components/Process/Process.jsx` |
| Animated stats (projects delivered, clients, etc.)         | `src/utils/data.js` (`stats` array) |
| Office addresses, phone numbers, business hours            | `src/utils/data.js` (`offices` array) — used automatically by both the Contact section and the Footer |
| Company email address                                      | `src/components/Contact/Contact.jsx` (search for `info@caelunaglobal.com`) |
| Footer text, quick links, services list                    | `src/components/Footer/Footer.jsx` |
| Logo (icon + wordmark)                                      | `src/components/Navbar/Logo.jsx` |
| Favicon (browser tab icon)                                  | `public/favicon.svg` |
| Privacy Policy text                                         | `src/pages/PrivacyPolicy.jsx` |
| Terms & Conditions text                                     | `src/pages/TermsConditions.jsx` |
| Page title / meta description (for Google search results)   | `index.html` |
| Brand colors (navy, blue gradient)                           | `src/index.css` (the `@theme` block at the top) |

## 4. Project Structure

```
src/
├── assets/                 (currently empty — add real images/logo files here)
├── components/
│   ├── Navbar/              Sticky nav bar + logo
│   ├── Hero/                Homepage hero banner
│   ├── About/                Mission, vision, values
│   ├── Services/              Service cards
│   ├── WhyChooseUs/            Feature cards
│   ├── Industries/              Industries served
│   ├── Process/                  "How We Work" horizontal roadmap
│   ├── Statistics/                 Animated counters banner
│   ├── Contact/                     Office cards + email
│   ├── Footer/                       Site footer
│   └── ui/                            Shared building blocks (buttons, section
│                                       headings, scroll-reveal animation, etc.)
├── pages/                   Home, PrivacyPolicy, TermsConditions, NotFound
├── hooks/                   useCountUp.js — powers the animated numbers
├── utils/
│   └── data.js              ALL site content lives here: nav links, office
│                             info, services, industries, process steps, stats
├── App.jsx                  Routing + page transition animation
└── main.jsx                 App entry point
```

---

## 5. Build Log — What Was Done, In Order

A running record of the work completed on this site, in the order it
happened, so it's clear what changed and why.

1. **Initial build.** Scaffolded the project (React 19 + Vite + Tailwind
   CSS v4) and built out a full corporate site: sticky nav, animated hero,
   About, Services, Why Choose Us, Industries, Technologies grid, "How We
   Work" timeline, Testimonials slider, animated Statistics, FAQ accordion,
   a validated Contact form (React Hook Form + EmailJS), a Careers page,
   and Privacy Policy / Terms & Conditions placeholder pages. All content
   at this stage was placeholder text for client review.

2. **Real logo shared.** Client provided the official CAELUNA Global logo
   (navy/blue globe mark). It hasn't been placed into the code yet — see
   **Outstanding Items** below.

3. **Scope simplified per client direction.** The client clarified this
   should be a simple, form-free services showcase — not a lead-gen site.
   Removed:
   - The interactive Contact form and its EmailJS/react-hook-form wiring
   - The Careers page and its nav/footer links
   - The Testimonials section

   Added the client's real business details in their place:
   - India office (Hyderabad) — address, phone, hours
   - USA office (San Antonio, TX) — address, phone, hours converted from
     the India business hours to US Central Time

4. **"How We Work" fixed and redesigned.** The original alternating
   vertical timeline had an animation bug and was unnecessarily complex
   (duplicate mobile/desktop markup). Rebuilt as a single horizontally
   scrollable roadmap — simpler, and the animation issue is resolved.

5. **Further trimmed per client feedback.** Removed the Technologies grid
   and FAQ accordion sections entirely, along with a redundant
   email/social-icons bar that had been duplicating contact info already
   shown elsewhere on the page.

6. **Navigation bar enlarged.** Client felt the nav text read too small.
   Increased the font size and weight of the nav links, the mobile menu,
   and the "Get Started" button.

7. **Real legal pages published.** Replaced the placeholder Privacy Policy
   and Terms & Conditions with the client's actual legal copy, under the
   registered company name **Caeluna Technologies Private Limited**,
   including the Hyderabad registered address.

8. **Contact email centralized.** Added `info@caelunaglobal.com` as a
   single shared line under the office cards in the Contact section
   (rather than repeating it on the legal pages too, since the office
   details and email now live in one place — the Contact section and
   Footer).

---

## 6. Outstanding Items (Need From Client)

- **Logo file.** The site currently uses a placeholder generated icon in
  the navbar, footer, and favicon. Once the real logo file (ideally a
  transparent-background PNG or SVG) is added to `src/assets/`, it needs
  to be wired into `src/components/Navbar/Logo.jsx` and `public/favicon.svg`.
- **Domain name.** The client mentioned purchasing a domain via Cloudflare.
  Once confirmed, `index.html`'s SEO metadata (title, description, social
  preview tags) should be updated to reference it.
- **Legal review.** The Privacy Policy and Terms & Conditions currently
  contain only the text the client provided. Given the company operates in
  both India and the US, we'd recommend a lawyer review these before the
  site goes live, in case additional clauses (data retention, cookies,
  liability, governing law) are needed.
- **Real social media links.** LinkedIn/Twitter/Facebook/Instagram icons in
  the Footer currently link to `#` (nowhere). Replace with real profile
  URLs in `src/components/Footer/Footer.jsx` once available.
