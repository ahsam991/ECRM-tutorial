# 📘 ECRM Documentation Architecture & Process Guide

This document maps out the entire structure and process of your ECRM Onboarding Portal (`index.html`). 
If you need to change, edit, or add any content to your documentation, look for the corresponding section below. This guide covers every single sector of the project so you will never miss a point.

---

## 📌 1. Navigation & Global Header
**What it does:** Contains the top navigation menu, the search bar, and the main hero section with the 3D grid layout.
**How to Edit:**
- **Navigation Links:** Search `index.html` for `<nav>` or `<div class="nav-links">`. You can add new `<a href="#section-id">` links here.
- **Hero Cards (Top grid):** Search for `<a class="hero-card" href="...">`. Here you can edit the labels (e.g., Section 1), the emoji icons, and the text displayed on the main dashboard cards.

---

## 📊 2. Business Explain (Section 01)
**What it does:** Explains the core business operational logic, the user hierarchy (Region ➡️ Area ➡️ Territory), and basic eCRM platform goals.
**How to Edit:**
- **Location:** Search for `<section id="business-explain">`
- **Business Cards:** Look for `<div class="biz-card">` to change the text for Data Privacy or Infrastructure.
- **Hierarchy Table:** Search for `<table class="hierarchy-table">` to add or remove location types (e.g., Cluster, Routes).
- **Flow Diagram:** Edit the `<div class="flow-steps">` to change the business flow arrows and logic nodes.

---

## ⚙️ 3. Campaign Flow Components (New Section)
**What it does:** Documents the operational building blocks used inside the eCRM campaign engine (e.g., `audio_start`, `dropdown`, `multipleChoice`).
**How to Edit:**
- **Location:** Search for `<section id="campaign-flow-components">`
- **Add a new component:** Copy an existing `<div class="campaign-card">` block and paste it inside the `<div class="campaign-grid">`. 
- Change the `<h3>` title for the component name, and the `<div class="details">` lists to explain its operational usage.

---

## 📈 4. SQL Reports (Section 02)
**What it does:** Lists major SQL analytical reports (like Call Center Report, Live Observation) and provides interactive modals to view the code.
**How to Edit:**
- **Location:** Search for `<section id="sql-reports">`
- **Report Cards:** Edit the `<div class="report-card">` elements to change the titles, descriptions, and the "tables-used" tags.
- **SQL Code Modals:** The actual SQL code for these reports is stored inside a JavaScript object at the bottom of the file. Search for `const SQL_DATA = {`. To update a query, find its key (e.g., `report1`, `report2`) and paste the new code.

---

## ✅ 5. Tasks & Questions (Section 03)
**What it does:** A task board tracking Campaign 161 challenges. Includes the direct download button for `questions.sql`.
**How to Edit:**
- **Location:** Search for `<section id="tasks">`
- **Download Link:** The download button points directly to `href="questions.sql"`. If you rename the SQL file, you must update the `href` here.
- **Task List Data:** The tasks are dynamically rendered via JavaScript. Search for `const tasks = [` (or look for objects resembling `{ id: 'task1' }`) near the bottom of `index.html` to add, remove, or change the status of tasks.

---

## 🔗 6. ER Diagram (Section 04)
**What it does:** Displays the high-performance, GPU-accelerated Entity-Relationship Diagram image.
**How to Edit:**
- **Location:** Search for `<section id="er-diagram">`
- **Update the Image:** You don't need to edit the code. Just replace the actual image file (`ecrm_prod_ecrm.svg`) in your root directory. The portal will automatically load the new version.

---

## 🎨 7. Relationships (Section 05)
**What it does:** An interactive visual playground that embeds the complex relationship architecture.
**How to Edit:**
- **Location:** Search for `<section id="schema-viewer">`
- **Update the Graph:** This section simply embeds an iframe. To update the interactive graph data, you must edit the external `ecrm_schema.html` file or `create_doc.js` which generates it. The `index.html` simply pulls it in using `<iframe src="ecrm_schema.html">`.

---

## 🗃️ 8. Schema Explorer (Section 06)
**What it does:** Dynamically displays all 135 tables categorized by prefix (e.g., `aai_`, `campaign_`), providing a searchable database dictionary.
**How to Edit:**
- **Location:** Search for `<section id="db-explorer">`
- **Adding/Editing Tables:** The tables and their column definitions are fully defined in the massive JavaScript object at the end of the file. Search for `const TABLES_META = {`.
- **Adding Categories:** To add a new color-coded category, modify the `const NAMESPACES = [` array located right above the table generation logic in the JavaScript section.

---

## 🎬 9. Tutorial (Section 07)
**What it does:** Embeds the Google Drive training folder dynamically.
**How to Edit:**
- **Location:** Search for `<section id="tutorial">`
- **Update Drive Link:** The iframe link is managed by JavaScript. You can edit the hardcoded Google Drive URL inside the HTML `<iframe>` source or inside the `changeIframe()` function.

---

## 📜 10. Footer & Credits
**What it does:** Displays team credits, bottom navigation, and copyright information.
**How to Edit:**
- **Location:** Search for `<footer>` at the very bottom of the HTML structure.
- **Team Info:** Modify the `<div class="footer-authors">` section to add or remove team members, titles, and roles.

---
**📝 Final Tip for Editing:** 
Since all styling is built with custom CSS variables, you can globally change colors (like Primary Blue, Accent Purple, Dark Mode Backgrounds) by simply searching for `:root {` at the top of the `<style>` block and modifying the hex codes!
