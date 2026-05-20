# ECRM Tutorial & Interactive Documentation Portal

Welcome to the **ECRM (Enterprise Consumer Relationship Management) Documentation Portal**. This repository contains the complete interactive onboarding guide, business overview, schema explorer, and SQL report documentation for the BATB ECRM system.

## 🚀 Key Features

- **Dynamic Schema Explorer:** Navigate through database schemas visually with a dark/light themed interface.
- **Interactive SQL Reports:** Clause-by-clause breakdowns of operational PostgreSQL queries (Daily Raw, Live Observation, Checkback, etc.).
- **Part-by-Part Business Logic:** Complete explanations of the JML (Joiner-Mover-Leaver) lifecycle, franchise vs SOB mapping, and campaign management rules.
- **Embedded Drive Integrations:** An in-page browser for tutorial media (Drive folders, Word docs, Videos) directly attached to the platform.
- **Responsive Layout:** A fixed navigation sidebar with IntersectionObserver scroll-spy, enabling seamless content discovery.

## 🏗️ Architecture Summary

The underlying ECRM system architecture relies on:
- **Operational Database (RDS):** A PostgreSQL cluster on AWS handling transactional operations, campaign execution, and raw survey logging.
- **Analytics Engine (BigQuery):** Data is replicated here to power scalable dashboards, reporting, and high-performance querying without affecting production environments.
- **Locations & Metadata:** Highly normalized tables using self-referencing patterns (e.g., `ecrm.locations`) covering the Region → Area → Cluster → Outlet hierarchy.

## 💻 Tech Stack (Documentation Portal)

This documentation portal is built as a highly optimized, dependency-free static site:
- **HTML5 & CSS3:** Semantic markup with modern CSS variables, Grid/Flexbox layouts, and a meticulously crafted custom Dark/Light theme.
- **Vanilla JavaScript:** Zero framework dependencies for extreme performance. Uses `IntersectionObserver` for navigation and localized state management.
- **Typography:** Premium modern typography featuring `Space Grotesk`, `Outfit`, and `JetBrains Mono`.

## 🌐 Deployment (Vercel)

This project is a 100% static site and is natively ready for edge deployment.

### How to Deploy via Vercel:
1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New Project**.
3. Import this GitHub repository (`ahsam991/ECRM-tutorial`).
4. Keep the Framework Preset as **Other** (default).
5. Click **Deploy**.

Vercel will instantly serve `index.html` as the entry point, rendering the full interactive portal.

## 📖 Further Reading

For a detailed, part-by-part breakdown of the actual ECRM business rules, roles, and campaign processes, please refer to the [process.md](./process.md) file included in this repository.
