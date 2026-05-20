-- =====================================================================
-- ECRM ONBOARDING - ANALYTICAL TASKS & QUESTIONS
-- =====================================================================
-- Assignee: MD AHSAMUL HAQUE
-- Role: Data Engineering & Analytics
-- Campaign: 161
-- =====================================================================

/*
TASK 1: Find Count of Consumer (Priority: High)
Description: Query the total unique consumer count for campaign 161 from ecrm.contacts using JSONB cast to find fresh vs not-fresh consumers.
*/
-- Write your SQL query below:



/*
TASK 2: RA Wise Contact Duration and Interval (Priority: Medium)
Description: Calculate per-RA (user) contact duration and interval between contacts using LEAD() window function on ecrm.contacts filtered by campaign_id=161.
*/
-- Write your SQL query below:



/*
TASK 3: Find Total Campaign Duration (Priority: Medium)
Description: Determine the overall campaign timeline from first contact to last contact for campaign 161. Use MIN(contact_date) and MAX(contact_date) from ecrm.contacts.
*/
-- Write your SQL query below:



/*
TASK 4: Date Wise PTR Achievement (Priority: High)
Description: Generate date-wise PTR (Points to Reach / target achievement) metrics for campaign 161. Split counts by gift materials (Lighter, Body Spray, etc.).
*/
-- Write your SQL query below:



/*
TASK 5: Outlet Wise PTR Count (Priority: Medium)
Description: Aggregate PTR counts grouped by outlet (location type=8) for campaign 161. Useful for identifying high-performing and low-performing outlets.
*/
-- Write your SQL query below:
