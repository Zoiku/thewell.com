# The Well Foundation Website

A public website for The Well Foundation, presenting its faith-based work with women and children, programs, impact, photo gallery, and ways to get involved.

Built with React 19, Vite, React Router, Tailwind CSS 4, reusable UI components, and Motion animations.

## Local development

Node.js and npm are required.

```sh
git clone https://github.com/Zoiku/thewell.com.git
cd thewell.com
npm install
npm run dev
```

Open the address printed by Vite.

The current homepage uses content and assets stored in the repository. No backend or CMS configuration is required for the page itself. Donation and participation copy should not be taken as evidence of a configured payment or form-processing service.

## Commands

- `npm run build`: creates production assets in `dist/`.
- `npm run preview`: serves the production build locally.
- `npm run lint`: runs ESLint.

No test script is declared.

## Code guide

- `src/routes/public.jsx`: the homepage route.
- `src/pages/home.jsx`: composes the active page sections.
- `src/components/`: header, footer, hero, programs, impact, gallery, and calls to action.
- `src/components/ui/`: shared UI primitives.
- `src/assets/`: photographs and graphics.
- `src/index.css`: global styling.

Several sections have alternate implementations with suffixes such as `-new` and `-refined`. Check the imports in `src/pages/home.jsx` before editing a section; only the imported version appears on the page.

## Deployment and checks

Publish `dist/` to a static host. Check mobile navigation, anchor scrolling, gallery/animation behavior, contact and donation destinations, and page metadata before release. Confirm any external donation or contact integration independently.
