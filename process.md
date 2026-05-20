# ECRM Business Process & Operational Workflow

This document serves as the complete operational guide for the BATB Enterprise Consumer Relationship Management (eCRM) system. It outlines the primary business objectives, data collection architecture, reporting systems, and user governance protocols.

---

## 1. Business Foundation & Operation

### Why This Business Exists
Due to strict regulations, smoking advertisements are not allowed in public media or billboards. Direct person-to-person consumer reach is mandatory. Therefore, the only effective way to contact smokers is through physical **outlet visits**.

### How the Business is Run
- **Campaign Execution:** Multiple campaigns are executed simultaneously, centered around targeted survey questions.
- **Retail Agents (RAs):** RAs visit outlets and interact one-on-one with consumers (must be ≥18 years old).
- **Data Capture:** They collect consumer profile data and brand preferences.
- **Actionable Insights:** This data is fed back into the system to understand consumer behavior and drive future data-driven marketing campaigns.

**🎯 Objectives:** 
Collect consumer and product-related data · Use surveys as the primary engagement and insight tool · Collect and analyze historical data · Conduct competitor and internal product analysis · Design and execute requirement-based, campaign-wise marketing workflows.

---

## 2. Data Collection & Market Intelligence

The core data collection process combines campaign interactions (consumer details and products) and campaign-wise survey responses. Everything is stored in a centralized database for analysis and campaign planning.

### Market & Product Analysis
- **🏆 Competitor Analysis:** Tracks competitor product offerings, promotions, and campaign trends via the eCRM to identify market positioning, gaps, and opportunities.
- **📦 Own Product Analysis:** Analyzes sales trends, customer engagement levels, survey feedback, and product lifecycle stages.
- **✨ New Product Promotion:** Validates new products through survey-based pre-launch testing, identifies target audiences, runs pilot campaigns, and tracks post-launch performance.
- **📈 Expected Benefits:** Better customer understanding, reduced dependency on traditional advertising, robust data-driven decision making, improved product-market fit, and higher ROI on campaign spend.

---

## 3. Classifications

### User vs. Consumer
- **User:** An individual who logs into the eCRM application (via Web or Mobile) to conduct surveys, manage data, or oversee operations (e.g., RA, AC, SUP).
- **Consumer:** An individual whose data is collected in the field through surveys.

### Product Types
- **Franchise:** Refers to the core brand products owned by BATB (British American Tobacco Bangladesh).
- **SOB:** Refers to external, non-BATB products (competitor products or other market offerings).

---

## 4. Joiner‑Mover‑Leaver (JML) Process

The JML process is a strict governance framework implemented to manage the lifecycle of all management users (AC, SUP, RA) in a controlled, secure, and auditable manner. All actions are fully logged for compliance.

- **📌 Joiner:** Creation and activation of a new user account (Onboarding).
- **🔄 Mover:** Modification of an existing user's role, permissions, or structural assignment.
- **🚪 Leaver:** Deactivation of a user account due to employee exit or permanent role change.
- **📜 Governance:** All JML requests must be initiated within the system and require approval per configured workflows.

---

## 5. Report Manager – Operational Reports

The eCRM generates five primary operational reports:

1. **📄 Daily Raw Report:** Provides the raw, unaggregated campaign data generated on a daily basis.
2. **📞 Call Check Back Report:** Records follow-up calls made by supervisors to consumers to verify whether the BR actually contacted them (Random Quality Audits).
3. **👁️ Live Observation Report:** Captures joint-call data where a supervisor observes a BR working in real-time to ensure process compliance.
4. **📞 Call Center Report:** Used when a second contact with a consumer is required. This supports running a structured call campaign for follow-up announcements or incentive delivery tracking.
5. **📅 Dynamic Report:** Allows the creation of ad-hoc reports with highly configurable parameters and custom date ranges.

---

## 6. Core Tables, Location Hierarchy & PTR

**🔑 The 3 most important tables for reporting:**
1. `ecrm.contacts`
2. `survey data maps`
3. `ecrm.locations`

### Location Hierarchy
The geographic structure follows a strict Top-Down model:
**Region → Area → Cluster → Outlet**

- **Terminal Point:** The *Outlet* is the terminal point for all consumer contacts. (Note: Outlet, Retailer, and POS all refer to the exact same entity).
- **Campaign Point:** The campaign terminal point is typically a POI (Point of Interest) or a Cluster. Locations are always assigned to a Cluster.

### PTR (Purchase Through Retail)
- **Definition:** Represents rewards or gifts provided to customers during a campaign. (Gift = PTR = Reward).
- **Storage:** Stored in the `materials` table, which is referenced by the Contacts table.
- PTR also defines the Promotional Material Templates used for campaign execution.

---

## 7. Brand Definitions & Data Mapping

Brand values are stored as integer IDs in the database. To retrieve readable brand names, you **must join** the `contacts` table with the `sku_items` table three separate times:

| Brand Type | Definition | Column in `contacts` table |
|------------|------------|----------------------------|
| **Primary Brand** | The brand the customer usually smokes. | `product` |
| **Secondary Brand** | The brand smoked when primary is unavailable. | `secondary_brand` |
| **Previous Brand** | A brand smoked in the past. *(Introduced Q1 2025; records prior are NULL)* | `previous_brand` |

---

## 8. User Roles & Platform Access

| User Type | Role / Description | Access Level |
|-----------|--------------------|--------------|
| **DC** | District Coordinator | Web Platform |
| **AC** | Area Coordinator | Web Platform |
| **SUP** | Supervisor (RA's immediate boss; escalates issues, assigns RAs) | Mobile App + Web |
| **RA / BR / FF** | Brand Rep / Field Force (Conducts surveys) | Mobile App |

---

## 9. Agencies & Geographic Coverage

| Agency Code | Geographic Locations / Coverage |
|-------------|---------------------------------|
| **Madly** | Considered the internal team. |
| **ATMSL** | Sylhet, Dhaka South |
| **IMSL** | Dhaka North, Chittagong |
| **IMSR** | Rajshahi, Barishal, Khulna |

---

## 10. Data Storage & Analytics Architecture

- **🗄️ Operational Data (AWS RDS):** Relational PostgreSQL databases manage day-to-day transactions, surveys, and core application logic.
- **⚡ Analytics Layer (BigQuery):** Data is replicated to Google BigQuery to power dashboards, dynamic reports, and large-scale analytical processing. This separation ensures optimized performance for transactional operations without production bottlenecks.
