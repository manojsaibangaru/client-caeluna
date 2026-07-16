# CAELUNA — Corporate Website (Demo)

A modern, fully responsive corporate website demo for **CAELUNA**, a placeholder
enterprise IT consulting brand. Built for client approval — all copy, branding,
and contact details are placeholders to be replaced with final content.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide React Icons
- React Hook Form
- EmailJS (`@emailjs/browser`, placeholder credentials)

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
│   ├── Industries/ Technologies/ Process/ Testimonials/
│   ├── Statistics/ FAQ/ Contact/ Footer/
│   └── ui/            # shared primitives (Button, Container, Reveal, ...)
├── pages/             # Home, Careers, PrivacyPolicy, TermsConditions, NotFound
├── hooks/
├── utils/             # placeholder content/data
├── App.jsx
└── main.jsx
```

## Customizing for the Real Client

Before launch, replace:

- Placeholder copy and stats in `src/utils/data.js`
- Office address, email, and phone in `Footer.jsx` and `Contact.jsx`
- EmailJS service/template/public key placeholders in `ContactForm.jsx`
- The Google Maps placeholder in `Contact.jsx` with a real embed
- Favicon and any imagery in `public/` and `src/assets/`
