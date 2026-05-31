# ECRM Implementation Process Map

This file contains the complete visual and architectural map of all features implemented in the ECRM onboarding portal. Each feature is categorized into a clear, distinct **Part Name** so you can easily reference it in future requests to modify it!

---

## 📌 Part 1: Supabase Database Integration & Resiliency
- **Scope**: Database tables, setup script, dynamic environment variables, and secure serverless connection.
- **Code Locations**:
  - `setup_db.js` (Database initialization for `users` and `audit_logs`)
  - `api/login.js` (Serverless connection pooling with SSL encryption)
  - `api/register.js` (Serverless signup query with dynamic variables)
  - `api/realtime.js` (Audit log activity data fetcher)
- **Key Features**:
  - 🔒 **SSL Enforcement**: Configured with `ssl: { rejectUnauthorized: false }` to prevent Vercel/serverless connection drops.
  - 🔄 **Smart Connection Fallbacks**: Auto-detects `process.env.DATABASE_URL` on Vercel and gracefully falls back to the hardcoded Supabase URL in local development.
  - ⚙️ **CommonJS Compatibility**: Uses strict `module.exports` structure instead of ES modules (`export default`) to eliminate Vercel compile/runtime errors.

---

## 📌 Part 2: Premium 3D Interactive Login Modal
- **Scope**: Responsive 3D landing gate, holographic glassmorphism design, floating parallax animation.
- **Code Locations**:
  - `index.html` (Modal markup, CSS variables, styles, and animation frames)
- **Key Features**:
  - 🌀 **Futuristic 3D Grid Space**: Dynamic, moving perspective grid lines acting as a particle-like backdrop.
  - 🛡️ **3D Rotating Key Emblem**: Fully CSS-rendered rotating key with deep shadow projections.
  - 💎 **Vibrant Holographic Glassmorphism**: Glass border using multi-colored moving linear gradients (`#3b82f6`, `#8b5cf6`, `#ec4899`, `#10b981`) and heavy background blur.
  - 🔄 **3D Card Mouse-Tilt Parallax**: Real-time JavaScript event listeners tracking cursor coordinates to tilt the modal box in 3D perspective (`rotateX`, `rotateY`).
  - 🎯 **Credential Guidance Panel**: Dedicated hint box displaying default seeded login profiles for rapid access.

---

## 📌 Part 3: Live Supabase Real-Time Database Activity Stream
- **Scope**: Real-time websocket-like feed monitoring database interactions directly on the onboarding dashboard.
- **Code Locations**:
  - `index.html` (Floating widget widget UI, auto-polling script, dynamic event feed)
  - `api/realtime.js` (Backend event log fetcher)
  - `server.js` (Local server API mock matching Vercel functionality)
- **Key Features**:
  - 🟢 **Online Status Pulse Indicator**: Blinking neon green dot showing live connection health.
  - 📊 **Dynamic Event Feed**: Auto-polls database `audit_logs` every 4 seconds to list:
    - User logouts, login attempts, and registrations.
    - Decryption attempts of protected SQL modules.
  - 🎈 **Slide-in Micro-animations**: Slick individual entry rendering with slide-in animations.

---

## 📌 Part 4: Decryption Event Logger Integration
- **Scope**: Linking user activity events directly to the Postgres database.
- **Code Locations**:
  - `index.html` (Interceptors added to the global `unlockSqlModal` function)
  - `server.js` (Local Express router log insertions)
- **Key Features**:
  - 📑 **Action Tracking**: Automatically inserts records into `audit_logs` whenever a user inputs a key to view decrypted source SQL codes.
  - 🔴 **Failed Attempt Logging**: Captures incorrect keys as `DECRYPT_FAIL` events, providing real-time security insights directly to the dashboard monitor!
