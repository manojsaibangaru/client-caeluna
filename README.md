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
| Logo icon image                                              | `src/assets/logo-mark.png` (swap the file, keep the same filename, or update the import path in `src/components/Navbar/Logo.jsx`) |
| Favicon (browser tab icon)                                  | `public/favicon.png` |
| Privacy Policy text                                         | `src/pages/PrivacyPolicy.jsx` |
| Terms & Conditions text                                     | `src/pages/TermsConditions.jsx` |
| Page title / meta description (for Google search results)   | `index.html` |
| Brand colors (navy, blue gradient)                           | `src/index.css` (the `@theme` block at the top) |

## 4. Project Structure

```
src/
├── assets/
│   ├── logo-mark.png        Cropped icon mark, used in the Navbar/Footer logo
│   └── logo-full.png        Original full logo artwork the client provided
│                             (icon + wordmark + tagline), kept for future use
│                             e.g. a social share image
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

2. **Real logo shared and integrated.** Client provided the official
   CAELUNA logo artwork (a navy hexagon badge with a moon/mountains mark,
   the "CAELUNA" wordmark, and tagline "Smart Solutions. Stronger
   Futures."). It's a large square poster-style graphic on a solid navy
   background, not pre-sized for a navbar or favicon, so the hexagon icon
   was cropped out and saved as `src/assets/logo-mark.png` for the
   Navbar/Footer logo and `public/favicon.png` for the browser tab icon;
   the full original artwork is kept at `src/assets/logo-full.png` for
   possible future use (e.g. a social share image). The "CAELUNA" text
   next to the icon is still rendered as live text (not part of the
   image), so it automatically adapts color between the light and dark
   navbar states.

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

9. **Real logo integrated.** Replaced the placeholder generated icon in
   the navbar, footer, and favicon with the client's actual logo mark
   (see item 2 above).

10. **Logo featured prominently in the hero.** Replaced the generic
    abstract "Unified Platform" mockup graphic on the homepage hero with
    the client's actual logo (icon, wordmark, and tagline), cropped from
    the original artwork and saved as `src/assets/logo-hero.png`. The
    logo's navy background blends directly into the hero's background
    color, so it reads as part of the page rather than a boxed-in image.
    The floating "Cloud Native / Zero-Trust Security / AI Powered / 99.9%
    Uptime" badges were kept as-is around it.

---

## 6. Outstanding Items (Need From Client)

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
