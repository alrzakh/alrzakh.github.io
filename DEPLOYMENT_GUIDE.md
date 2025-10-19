# Deploy to GitHub Pages (Clean URLs)

This guide explains how to deploy your portfolio to `username.github.io` without the repository name in the URL.

## Why This Approach?

**Regular repo**: `username.github.io/my-portfolio/contact` ❌  
**Special repo**: `username.github.io/contact` ✅

## Prerequisites

✅ Your `vite.config.ts` is already configured with `base: '/'`  
✅ Your `package.json` has the deployment scripts

## Step-by-Step Deployment

### Step 1: Create Special GitHub Repository

1. Go to GitHub and create a **new repository**
2. Name it **exactly**: `username.github.io`
   - Replace `username` with your **actual GitHub username**
   - Example: If your username is `alrza`, name it `alrza.github.io`
   - ⚠️ **Important**: The name must match exactly, including lowercase/uppercase

3. **DO NOT** initialize with README, .gitignore, or license

### Step 2: Update package.json Homepage

Open `package.json` and update the `homepage` field:

```json
"homepage": "https://yourusername.github.io/"
```

Replace `yourusername` with your actual GitHub username.

### Step 3: Initialize and Push to GitHub

If you haven't already initialized git:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote origin (replace yourusername!)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

### Step 5: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 6: Wait and Visit

- GitHub Pages takes 1-5 minutes to deploy
- Visit: `https://yourusername.github.io/`
- Your contact page will be at: `https://yourusername.github.io/contact`

---

## Updating Your Portfolio

Whenever you make changes:

```bash
# 1. Make your changes to the code
# 2. Commit changes to git
git add .
git commit -m "Update portfolio"
git push origin main

# 3. Deploy to GitHub Pages
npm run deploy
```

---

## Troubleshooting

### Issue: Repository name error
**Problem**: GitHub says the repository name is already taken

**Solution**: 
- Someone else might have that username
- Make sure you're using YOUR GitHub username
- Check for typos in the repository name

### Issue: 404 Page Not Found
**Problem**: Getting 404 when visiting the site

**Solution**:
1. Wait a few more minutes (initial deployment can take 5-10 minutes)
2. Check GitHub Pages settings are correct
3. Verify `base: '/'` in `vite.config.ts`
4. Clear browser cache and try again

### Issue: Assets not loading
**Problem**: CSS or images are not loading

**Solution**:
1. Check that `base: '/'` in `vite.config.ts`
2. Make sure you're using relative imports:
   ```js
   // Good ✅
   import logo from './assets/logo.svg'
   
   // Bad ❌
   import logo from '/assets/logo.svg'
   ```

### Issue: Routing not working
**Problem**: Page refreshes on routes like `/contact` give 404

**Solution**: Add a `404.html` file to handle client-side routing

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Redirect to index.html with the path as a query parameter
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Then add to `index.html` inside the `<head>` tag:
```html
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

---

## One Repository Per User

⚠️ **Important Limitation**: You can only have **ONE** `username.github.io` repository per GitHub account.

If you want multiple projects on GitHub Pages, you have two options:

### Option 1: Use this repo for your main portfolio
- Main portfolio: `username.github.io` (no path)
- Other projects: `username.github.io/project-name` (with path)

### Option 2: Use a custom domain
- Buy a domain (e.g., `yourname.com`)
- Point it to your GitHub Pages
- Then you can use `username.github.io` for something else

---

## Custom Domain (Optional)

If you want to use a custom domain like `yourname.com`:

### Step 1: Create CNAME file
In your `public` folder, create a file named `CNAME` (no extension):

```
yourdomain.com
```

Or with www:
```
www.yourdomain.com
```

### Step 2: Configure DNS
In your domain provider's DNS settings, add:

**For apex domain** (`yourdomain.com`):
- Type: `A`
- Name: `@`
- Value: 
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

**For www subdomain** (`www.yourdomain.com`):
- Type: `CNAME`
- Name: `www`
- Value: `yourusername.github.io`

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Configure on GitHub
1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS" (after DNS propagation)

DNS changes can take 24-48 hours to propagate.

---

## Quick Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Full workflow
git add .
git commit -m "Your message"
git push origin main
npm run deploy
```

---

## Summary

✅ Repository name: `username.github.io` (exact match)  
✅ Config: `base: '/'` in `vite.config.ts`  
✅ Deploy: `npm run deploy`  
✅ Result: Clean URLs like `username.github.io/contact`

Happy deploying! 🚀

