# Poster Maker — Frontend

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify)](https://netlify.com/)

> A poster generation portal for insurance advisors at Punjab Insurance Canada. Advisors log in, select a branded template sized for their target social platform, remove backgrounds from images using AI, and export — all in one place.

**Backend Repo:** [Poster-maker-backend →](https://github.com/AbhayParasharhere/Poster-maker-backend)

---

## What It Does

Insurance advisors previously created promotional posters manually across separate tools. This app consolidates the entire workflow: authenticated advisor accounts, platform-sized branded templates, AI-powered background removal, and one-click poster export.

**Key flows:**
- Advisor signup with employee ID, photo, and digital signature upload
- JWT auth with cookie-based session management (`js-cookie`)
- Template browser filtered by social platform size (Instagram, Facebook, LinkedIn, Twitter)
- AI background removal on uploaded images (`@imgly/background-removal`)
- Poster export via `html2canvas` + `dom-to-image-more`
- Profile management — update name, password, photo, digital signature

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 + Vite 4 |
| Routing | React Router DOM v6 |
| Image export | `html2canvas`, `dom-to-image-more` |
| Background removal | `@imgly/background-removal` |
| Auth | JWT + `js-cookie` |
| Deployment | Netlify |

---

## Project Structure
```
src/
├── LoginPage/          # Login flow
├── Signuppage/         # Signup with photo + signature upload
├── PosterSelectorPage/ # Template browser by platform size
├── DetailChangePage/   # Profile management
├── Module/             # RemoveBG background removal module
├── apis/               # API call functions
├── assets/             # Static assets
├── App.jsx             # Routes
└── App.css
```

---

## Local Setup

**Prerequisites:** Node.js 18+
```bash
# Clone and install
git clone https://github.com/AbhayParasharhere/Poster-maker-frontend
cd Poster-maker-frontend
npm install

# Run dev server
npm run dev
# → http://localhost:5173
```

The app proxies API calls to the backend — update `vite.config.js` proxy target to your local backend URL if running the backend locally.
```js
// vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:8000'
  }
}
```

---

## Scripts
```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

---

## Contributors

Built as a paid client engagement for **Punjab Insurance Agency Inc.** (Canada) alongside a companion [Training Portal](https://github.com/AbhayParasharhere/training-portal-pi).

| Contributor | GitHub |
|---|---|
| Abhay Parashar | [@AbhayParasharhere](https://github.com/AbhayParasharhere) |
| Abhi | [@abhi-rzoro](https://github.com/abhi-rzoro) |
| Naman Batra | [@nbatra752](https://github.com/nbatra752) |

---

## Related

| Repo | Description |
|---|---|
| [Poster-maker-backend](https://github.com/AbhayParasharhere/Poster-maker-backend) | Django REST API |
| [training-portal-pi](https://github.com/AbhayParasharhere/training-portal-pi) | Companion project, same client |
| [PowerCompass Pro](https://powercompasspro.com) | Multi-tenant SaaS CRM |
