# Zach Dunkley Real Estate - Deployment Guide

## Your Booking Page is Ready!

I've created a professional contact page with all the features you requested. Here's how to get it live in 5 minutes.

---

## Step 1: Create a GitHub Repository

1. Go to https://github.com and log in with your account (jackgrealis)
2. Click the **+** icon in the top right → **New repository**
3. Name it: `zachdunkley-booking` (or whatever you prefer)
4. Description: "Zach Dunkley Real Estate - Contact & Booking Page"
5. Choose **Public** (so Netlify can access it)
6. Click **Create repository**

---

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands to run. Use these exact commands:

```bash
git branch -M main
git remote add origin https://github.com/jackgrealis/zachdunkley-booking.git
git push -u origin main
```

(Replace `jackgrealis` with your actual GitHub username if different)

---

## Step 3: Connect to Netlify and Deploy

1. Go to https://netlify.com
2. Click **Sign up** and choose **GitHub** as your sign-up method
3. Authorize Netlify to access your GitHub account
4. Once logged in, click **Add new site** → **Import an existing project**
5. Select your GitHub repository: `zachgrealis/zachdunkley-booking`
6. Leave build settings as default
7. Click **Deploy site**

**Netlify will generate your live URL** (looks like: `https://zachdunkley-booking.netlify.app`)

---

## Step 4: Set Up Form Notifications

After deployment:

1. Go to your Netlify site dashboard
2. Click **Forms** in the top menu
3. You should see your form listed
4. Click on it and go to **Settings**
5. Under **Form notifications**, add your email: `z.dunkley@harcourts.co.nz`
6. Select **Email notification on submission**

Now you'll get an email every time someone fills out your form!

---

## Step 5: Add to Your Instagram Bio

Once you have your live URL:

1. Go to Instagram
2. Edit your bio
3. Add the link in the **Website** field
4. Post a story saying "Link in bio to book a consultation!" 

---

## Page Features

✅ **Professional design** - Rotorua-themed colors (green & warm orange)
✅ **Phone OR Email** - Visitors choose their preferred contact method
✅ **Smart validation** - Won't submit unless at least one contact method provided
✅ **Mobile responsive** - Works perfectly on phones and tablets
✅ **Direct contact links** - WhatsApp, phone, and email shortcuts
✅ **Social links** - Instagram and Facebook buttons
✅ **Form fields collected:**
   - Full Name (required)
   - Phone (optional - as long as email filled)
   - Email (optional - as long as phone filled)
   - Property Interest (required)
   - Timeline (required)
   - Message/Notes (optional)

---

## Form Submission Flow

When someone submits:
1. Form validates (phone OR email must be filled)
2. Success message appears: "Thank you! I'll be in touch within 2 hours"
3. You receive email notification with all their info
4. Form resets for next visitor

---

## Troubleshooting

**Form not sending emails?**
- Make sure you configured notifications in Netlify Forms settings
- Check spam folder for Netlify notification emails

**Phone/Email validation not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try in a different browser

**Page looks broken on mobile?**
- This is fully responsive - should work fine on all devices
- If issues, clear cache and refresh

---

## Next Steps

Once live, I can help you with:
- Facebook page optimization
- Instagram bio updates
- Setting up Facebook Lead Ads ($30-50 budget)
- Setting up Google Local Services Ads ($80-100 budget)
- CRM integration (HubSpot/Pipedrive)

---

**Your live URL will be:** (you'll get this after Netlify deployment)

---

Need help with any step? Let me know!
