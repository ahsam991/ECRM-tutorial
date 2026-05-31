# Vercel Environment Variables Setup

## Required Environment Variables for Login to Work

Add these environment variables in your **Vercel Dashboard**:

### Step 1: Go to Vercel Dashboard
1. Navigate to your project at: https://vercel.com/dashboard
2. Click on your project name
3. Go to **Settings** → **Environment Variables**

### Step 2: Add These Variables

| Key | Value | Environments |
|-----|-------|--------------|
| `DATABASE_URL` | `postgresql://postgres:Tlvbx74QwdAwIx4x@db.jhfzdtacfedbpktkfabm.supabase.co:5432/postgres` | Production, Preview, Development |
| `JWT_SECRET` | `super-secret-key-for-ecrm` | Production, Preview, Development |

### Step 3: Redeploy
After adding the environment variables:
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **Redeploy** (or push a new commit)

---

## For Local Development

The `.env.local` file already contains these values for local testing.

---

## Security Note

⚠️ **Important**: The `.env` and `.env.local` files are now in `.gitignore` and will NOT be committed to GitHub. Never share your database credentials publicly!
