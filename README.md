# Ibrahim Aliy — Frontend Developer Portfolio

> Modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Designed with an authentic engineering narrative separating independent product architecture from enterprise team contributions.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-20232A?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

---

## ⚡ Highlights & Key Features

- **🌓 System-Preference Theme Engine**:
  - Automatically matches OS/browser color scheme (`prefers-color-scheme`) by default.
  - Real-time reactive listener for system theme changes without page reloads.
  - Zero Flash of Unstyled Theme (Zero FOUT) via synchronous `<head>` script.
  - Multi-variant controls: compact icon toggle on desktop, 3-option segmented radio (`Auto` · `Light` · `Dark`) in the mobile drawer.
  - Persisted user override via `localStorage`.

- **📐 Dual Visual Craft**:
  - **Dark Mode**: Obsidian zinc palette (`#09090b` canvas), glowing borders, and emerald highlights.
  - **Light Mode**: High-contrast Linear/Vercel light theme (`#ffffff` canvas, subtle off-white card surfaces, deep `#09090b` typography).

- **🛡️ Authentic Engineering Separation**:
  - **Personal Flagship Architecture**: Complete ownership over system design, dual-state management (Zustand client state + TanStack React Query server caching), and temporary inventory reservation mechanisms (*Fila Yoruba*, *Attendance Management System*).
  - **Enterprise Team Contributions**: Documented UI engineering, REST API integrations, and QA defect resolutions at *Outcess Solutions*.

- **📱 Flawless Mobile Responsiveness**:
  - Fluid layouts across 320px, 375px, 430px, 768px, 1024px, and 1440px.
  - Accessible touch targets (≥ 44px), smooth animated drawer with keyboard Escape dismissal, and zero horizontal scroll overflow.

- **🔍 SEO & Semantic Architecture**:
  - Full OpenGraph metadata, JSON-LD Schema (Person & Credentials), dynamic `sitemap.xml`, and `robots.txt`.
  - 100% static site generation (SSG) across all 16 routes for instant sub-second edge delivery.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Library** | React 19 (Server & Client Components) |
| **Language** | TypeScript (Strict mode, zero `any`) |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Properties |
| **State & Cache Patterns** | Zustand, TanStack React Query patterns |
| **Icons** | Lucide React |
| **Typography** | Inter & JetBrains Mono (next/font) |

---

## 📂 Featured Projects Showcase

| Project | Type | Architecture / Role | Links |
| :--- | :--- | :--- | :--- |
| **Fila Yoruba** | Personal Flagship | Full-stack e-commerce architecture, Zustand cart state, dual-state caching | [Storefront](https://filayoruba-demo.vercel.app/) · [GitHub](https://github.com/ibrahimaliy/filayoruba-demo) |
| **Attendance Management System** | Personal Featured | Multi-role portal (`/student`, `/lecturer`, `/admin`), real-time attendance stats | [Live Portal](https://attendance-management-system-five-kappa.vercel.app) · [GitHub](https://github.com/ibrahimaliy/ATTENDANCE-MANAGEMENT-SYSTEM) |
| **Music Player** | Personal Build | Web Audio API, playlist state machine, progress tracking | [Live Demo](https://music-player-five-liart.vercel.app/) · [GitHub](https://github.com/ibrahimaliy/MUSIC-PLAYER) |
| **Memory Card Game** | Personal Build | Dynamic grid shuffling, turn & match evaluation logic | [Live Demo](https://memory-card-psi-two.vercel.app/) · [GitHub](https://github.com/ibrahimaliy/MEMORY-CARD) |
| **Weather App** | Personal Build | Asynchronous REST geocoding & Open-Meteo forecasts | [Live Demo](https://weather-app-two-ruddy-23.vercel.app/) · [GitHub](https://github.com/ibrahimaliy/WEATHER-APP) |
| **Notepad App** | Personal Build | LocalStorage persistence, clean note management UI | [Live Demo](https://react-app-drab-one-37.vercel.app/) · [GitHub](https://github.com/ibrahimaliy/React-App) |
| **Outcess Corporate Web** | Professional (Team) | Corporate digital service pages, cross-browser responsive testing | [Live Site](https://outcess.com) · [GitHub](https://github.com/Outcess-Solutions-Nigeria-Limited/outcess-web) |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ibrahimaliy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Type-check & Lint**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Portfolio**: [https://ibrahimaliy.dev](https://ibrahimaliy.dev)
- **Email**: [ibrahimaliy1907@gmail.com](mailto:ibrahimaliy1907@gmail.com)
- **LinkedIn**: [linkedin.com/in/ibrahim-aliy-1ba7a3434](https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434)
- **X (Twitter)**: [@ibrahimaliy_19](https://x.com/ibrahimaliy_19)
- **Location**: Nigeria · Available for Global Remote Opportunities

---

© 2026 Ibrahim Aliy. Built with precision and care.
