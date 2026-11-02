# Sana Hasan — Full-Stack Developer Portfolio

A bespoke, production-ready developer portfolio website crafted for **Sana Hasan**, an aspiring full-stack software engineer. This project transforms the original Google Stitch design system into a modern, full-stack React TypeScript application with client-side routing, an Express API backend, persistent contact inquiry logging, and strict adherence to the Warm Editorial aesthetic.

---

## 1. Project Overview & Aesthetic Identity

The design language faithfully preserves the Google Stitch **Warm Editorial** visual identity:
- **Serif Display Headlines**: Typeset in *Playfair Display* for classic editorial grace.
- **Body Ergonomics**: High-legibility typography in *Inter*.
- **Technical Monospace Labels**: *JetBrains Mono* for code artifacts, terminal simulations, and metadata chips.
- **Warm Off-White & Charcoal Palette**: `#faf9f6` background with `#1a1c1a` typography and restrained `#ac3400` terracotta accents.
- **Dark Mode Support**: Deep graphite (`#0f1115`) editorial theme with custom tokens and persistent theme switching.
- **Multi-Page Client Routing**: Full client-side navigation without trapping pages inside single-page anchor scroll blocks.
- **Honest Content Architecture**: Clearly identifies editable concept placeholders and verified student coursework without inventing fake client metrics or employment claims.

---

## 2. Technologies & Architecture

### Frontend Stack
- **Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/) with fast HMR and reverse proxy configuration
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (Multi-page SPA with 404 fallback)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with Warm Editorial design system tokens
- **Iconography**: [Google Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide React](https://lucide.dev/)

### Backend Stack
- **Server Runtime**: [Node.js](https://nodejs.org/) with [Express 4](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/)
- **Execution & Hot Reloading**: [tsx](https://github.com/privatenumber/tsx)
- **Validation**: [Zod](https://zod.dev/) for strict schema parsing of contact requests
- **Security**: [Helmet](https://helmetjs.github.io/) for secure HTTP headers, [CORS](https://github.com/expressjs/cors) origin control, and [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) (10 inquiries per 15 min per IP)
- **Persistence**: File-backed structured JSON inquiry store (`data/inbox.json`)
- **Email Service**: [Nodemailer](https://nodemailer.com/) with honest unconfigured fallback

---

## 3. Project Structure

```
sana-hasan-portfolio/
├── data/                         # Local persistence store for recorded inquiries
│   └── inbox.json
├── server/                       # Express TypeScript backend
│   ├── index.ts                  # Server entry point, Helmet, CORS, health endpoint
│   ├── middleware/
│   │   └── rateLimiter.ts        # Rate limiter middleware
│   ├── routes/
│   │   └── contact.ts            # POST /api/contact & GET /api/contact/messages
│   ├── services/
│   │   ├── emailService.ts       # SMTP notification dispatcher
│   │   └── storageService.ts     # Persistent inquiry storage service
│   ├── test/
│   │   └── api.test.ts           # Automated backend integration test suite
│   └── tsconfig.json             # Server TypeScript config
├── src/                          # React client application
│   ├── components/
│   │   ├── ProjectModal.tsx      # Accessible case-study dialog with ESC/backdrop close
│   │   ├── ResumeModal.tsx       # Printable CV dossier viewer
│   │   └── SeoMeta.tsx           # SEO title and description synchronizer
│   ├── context/
│   │   └── ThemeContext.tsx      # Light/dark theme provider with localStorage memory
│   ├── data/
│   │   └── portfolioData.ts      # Strongly typed portfolio content (editable without rebuilding)
│   ├── layouts/
│   │   ├── Header.tsx            # Sticky header with mobile menu and theme toggle
│   │   ├── Footer.tsx            # Footer with brand notes, sitemap, and back-to-top
│   │   └── MainLayout.tsx        # Base shell wrapping Header, Outlet, and Footer
│   ├── pages/
│   │   ├── HomePage.tsx          # Hero manifesto, principles, project preview, skills strip
│   │   ├── AboutPage.tsx         # Dual portraits, cognitive workflow, beyond-code arts
│   │   ├── SkillsPage.tsx        # Telemetry, category filter (Code/Web/Design), roadmaps
│   │   ├── ProjectsPage.tsx      # Filterable showcase (All/Frontend/Full-Stack/Automation)
│   │   ├── JourneyPage.tsx       # Trajectory epochs, C memory code snippet, milestone cards
│   │   ├── ContactPage.tsx       # Transmittal form, clipboard copy, live clock, PGP key
│   │   ├── ResumePage.tsx        # Dedicated printable Curriculum Vitae route
│   │   └── NotFoundPage.tsx      # Editorial 404 error page with navigation recovery
│   ├── types/
│   │   └── portfolio.ts          # TypeScript interfaces for portfolio data
│   ├── utils/
│   │   └── api.ts                # Client API fetch helper
│   ├── App.tsx                   # Route definitions
│   ├── index.css                 # CSS custom properties and global typography
│   └── main.tsx                  # React DOM entry point
├── .env.example                  # Environment variable template
├── index.html                    # HTML entry point with Google Fonts and meta tags
├── package.json                  # Dependencies, scripts, and build tasks
├── tailwind.config.js            # Design tokens for warm editorial aesthetics
├── tsconfig.json                 # Frontend TypeScript config
└── vite.config.ts                # Vite config with React plugin and /api proxy
```

---

## 4. Routes Specification

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero, principles, selected works, skills teaser, trajectory teaser, dialogue callout. |
| `/about` | **About** | Biography, dual studio portraits, cognitive workflow bar, beyond-code design practices, specs sidebar. |
| `/skills` | **Skills** | Technical inventory, category filter (Code, Web, Design, Next Horizons), telemetry summary. |
| `/projects`| **Projects** | Filterable project catalog (Frontend, Full-Stack, Automation), modal case studies with architecture breakdown. |
| `/journey` | **Journey** | Trajectory log, 4 learning epochs (Fundamentals, Web Interfaces, Personal Projects, Full-Stack Scale). |
| `/contact` | **Contact** | Validated dispatch form, copy email button with feedback, UTC timezone clock, PGP fingerprint. |
| `/resume` | **Resume** | Dedicated printable dossier with honest transparent status for PDF downloads. |
| `*` | **404** | Editorial page not found fallback with return links. |

---

## 5. Prerequisites

- **Node.js**: v18.0.0 or later (Tested on Node v22.13.1)
- **npm**: v9.0.0 or later (Tested on npm 11.0.0)

---

## 6. Installation & Quick Start

1. Clone or navigate into the project workspace:
   ```bash
   cd "c:\Users\Dell\Downloads\sana hasan"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional for local development):
   ```bash
   cp .env.example .env
   ```

4. Launch both the React frontend and Express backend simultaneously:
   ```bash
   npm run dev
   ```

5. Open your browser:
   - **Frontend Application**: [http://localhost:3000](http://localhost:3000)
   - **Backend API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 7. Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs both Express backend (`:5000`) and Vite frontend (`:3000`) concurrently with hot reloading. |
| `npm run client` | Starts only the Vite frontend dev server on `http://localhost:3000`. |
| `npm run server` | Starts only the Express backend on `http://localhost:5000` via `tsx watch`. |
| `npm run build` | Compiles client TypeScript and produces the optimized Vite production bundle in `dist/`. |
| `npm run build:server` | Verifies and builds the backend TypeScript server. |
| `npm test` | Runs the automated API integration test suite (validation, persistence, rate-limiting). |
| `npm run preview` | Previews the production Vite bundle locally. |

---

## 8. Backend & Email Configuration

The contact form dispatches data to `POST /api/contact`.

### Behavior Without SMTP (Default / Local Development)
- If no SMTP credentials are provided, **the system does NOT crash or claim fake delivery**.
- The inquiry is securely written into `data/inbox.json`.
- The API responds with HTTP 200 and an honest note:
  > *"Your message has been safely received and preserved in the portfolio inquiry log. Email delivery pending SMTP configuration in .env."*
- You can inspect all recorded messages anytime at: `GET /api/contact/messages`.

### Behavior With SMTP Configured
To enable direct email forwarding to your inbox:
1. Open `.env` and configure your credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=sana.hasan@example.com
   ```
2. Inquiries will immediately forward to `CONTACT_EMAIL` with formatted HTML while simultaneously archiving to `data/inbox.json`.

---

## 9. Content Management

All profile details, projects, skills, and journey milestones are separated from presentation code in:
- `src/data/portfolioData.ts`

To add a new project or change contact info:
1. Open `src/data/portfolioData.ts`.
2. Add a new object to the `projects` array matching the `Project` TypeScript interface.
3. The projects catalog and category filters will automatically update without touching JSX components!

---

## 10. Attaching an Official Resume PDF

To attach an official downloadable PDF file:
1. Place your compiled PDF file at:
   ```
   public/resume.pdf
   ```
2. Set `isAvailable: true` in `src/data/portfolioData.ts` under `profile.resume`.
3. The download button will immediately serve the real binary file.

---

## 11. Production Deployment

### Option A: Static Frontend + Serverless / Node Server
- **Frontend**: Deploy `dist/` to Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront.
- **Backend**: Deploy `server/` to Render, Railway, Fly.io, or an AWS EC2 / DigitalOcean container.
- Update `VITE_API_URL` or configure reverse proxy routing.

### Option B: Monolithic Node.js Container
1. Run `npm run build` to compile the frontend to `dist/`.
2. In `server/index.ts`, serve static files from `dist/`:
   ```ts
   app.use(express.static(path.resolve(__dirname, '../dist')));
   app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
   ```
3. Run with `npm start`.
