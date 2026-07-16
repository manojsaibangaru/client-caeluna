# CAELUNA — Corporate Website (Demo)

A modern, fully responsive corporate website demo for **CAELUNA**, a placeholder
enterprise IT consulting brand. Built for client approval — a simple, single-page
site to showcase services, with no contact form or careers section.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run oxlint
```

## Project Structure

```
src/
├── assets/
├── components/
│   ├── Navbar/ Hero/ About/ Services/ WhyChooseUs/
│   ├── Industries/ Technologies/ Process/
│   ├── Statistics/ FAQ/ Contact/ Footer/
│   └── ui/            # shared primitives (Button, Container, Reveal, ...)
├── pages/             # Home, PrivacyPolicy, TermsConditions, NotFound
├── hooks/
├── utils/             # site content/data (offices, services, FAQ, etc.)
├── App.jsx
└── main.jsx
```

## Customizing for the Real Client

Before launch, replace:

- Placeholder copy and stats in `src/utils/data.js`
- Real social media links in `src/components/ui/socialIcons.js` usage sites
  (`Footer.jsx` and `Contact.jsx`)
- Favicon and any imagery in `public/` and `src/assets/`
- SEO metadata (`index.html`) once the final domain is known
