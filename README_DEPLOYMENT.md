# ECRM Login System - Deployment Guide

## Network Error Fix Summary

The login page "network error" issue has been fixed by:

1. **Updated API Files** (`/api/login.js` and `/api/register.js`):
   - Now use `process.env.DATABASE_URL` environment variable instead of hardcoded credentials
   - Added SSL configuration required for Supabase connections
   - Added better error handling for network issues (ENETUNREACH)
   - Returns specific error messages to help diagnose connection problems

2. **Updated Frontend** (`/index.html`):
   - Enhanced error messages in the login form
   - Better user feedback for different types of connection failures
   - Console logging for debugging

## For Vercel Deployment

### Step 1: Set Environment Variables in Vercel

Go to your Vercel project dashboard → Settings → Environment Variables and add:

```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.your-supabase-project.supabase.co:5432/postgres
JWT_SECRET=your-secure-random-secret-key-here
```

**Important:** 
- Replace `YOUR_PASSWORD` with your actual Supabase database password
- Replace the host with your actual Supabase database host
- Generate a strong random string for `JWT_SECRET` (at least 32 characters)

### Step 2: Redeploy

After adding the environment variables, redeploy your application:

```bash
vercel --prod
```

Or trigger a redeploy from the Vercel dashboard.

## For Local Development

1. Create a `.env` file in the root directory (already exists, but verify):

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.your-supabase-project.supabase.co:5432/postgres
JWT_SECRET=super-secret-key-for-ecrm
```

2. Install dependencies:

```bash
npm install
```

3. Run locally with Vercel CLI:

```bash
vercel dev
```

## Troubleshooting

### Common Issues:

1. **"Database connection unavailable" error**
   - Check if DATABASE_URL is set correctly in Vercel environment variables
   - Verify your Supabase database is accessible
   - Check firewall/network restrictions

2. **"Invalid credentials" error**
   - Ensure the `users` table exists in your database
   - Verify the table has columns: `id`, `username`, `password_hash`, `role`

3. **SSL Connection Errors**
   - The code already includes `ssl: { rejectUnauthorized: false }` for Supabase
   - If using a different provider, adjust SSL settings accordingly

### Database Schema Required:

The `users` table should have at minimum:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit `.env` files to version control (already in `.gitignore`)
- Always use strong, unique passwords for production
- Rotate JWT_SECRET periodically
- Use HTTPS in production (Vercel handles this automatically)
