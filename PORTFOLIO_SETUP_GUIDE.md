# React + Vite Portfolio - Setup & Deployment Guide

## Table of Contents
1. [Project Setup](#project-setup)
2. [Project Structure](#project-structure)
3. [GitHub Pages Configuration](#github-pages-configuration)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Project Setup

### 1. Create Vite Project
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

**Brief Explanation:** Vite is a fast build tool that provides a better development experience than Create React App. The `--template react` flag sets up a React project with JavaScript.

### 2. Install Additional Dependencies
```bash
# For deployment to GitHub Pages
npm install --save-dev gh-pages

# Optional: Useful libraries for portfolios
npm install react-router-dom
npm install react-icons
```

**Brief Explanation:** 
- `gh-pages`: Automates deployment to GitHub Pages
- `react-router-dom`: For multi-page navigation
- `react-icons`: Easy access to popular icon libraries

### 3. Test Local Development
```bash
npm run dev
```
Visit `http://localhost:5173` to see your app running.

---

## Project Structure

### Recommended Folder Structure
```
my-portfolio/
├── public/
│   ├── favicon.ico
│   └── images/
│       └── (your images, resume, etc.)
├── src/
│   ├── assets/
│   │   └── (logos, icons, etc.)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── (CSS modules or stylesheets)
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

### Key Components to Build

1. **Header/Navbar**: Navigation menu with smooth scrolling
2. **Hero Section**: Your name, title, and brief intro
3. **About**: Your background and story
4. **Projects**: Showcase your best work with images and links
5. **Skills**: Technologies and tools you work with
6. **Contact**: Contact form or social media links
7. **Footer**: Copyright and additional links

---

## GitHub Pages Configuration

### 1. Update `vite.config.js`
Add the `base` property to match your GitHub repository name:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Replace with your repo name
})
```

**Brief Explanation:** The `base` option sets the public base path for the app. For GitHub Pages at `username.github.io/repo-name`, set `base: '/repo-name/'`. For custom domains or `username.github.io`, use `base: '/'`.

### 2. Update `package.json`
Add deployment scripts and homepage:

```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://username.github.io/my-portfolio/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Brief Explanation:**
- `homepage`: Your GitHub Pages URL
- `predeploy`: Automatically builds before deploying
- `deploy`: Pushes the `dist` folder to the `gh-pages` branch

### 3. Create `.gitignore`
Ensure you have a proper `.gitignore` file:

```
# Logs
logs
*.log
npm-debug.log*

# Dependencies
node_modules/

# Build output
dist
dist-ssr

# Environment files
.env
.env.local

# Editor
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

---

## Deployment

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create GitHub Repository
1. Go to GitHub and create a new repository named `my-portfolio`
2. **DO NOT** initialize with README, .gitignore, or license

### Step 3: Link Local to Remote
```bash
git remote add origin https://github.com/username/my-portfolio.git
git branch -M main
git push -u origin main
```

**Brief Explanation:** Replace `username` with your actual GitHub username.

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

**Brief Explanation:** This command builds your project and pushes the `dist` folder to a `gh-pages` branch.

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**
5. Wait a few minutes, then visit `https://username.github.io/my-portfolio/`

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** 
- Check that `base` in `vite.config.js` matches your repository name
- Ensure `homepage` in `package.json` is correct
- Clear browser cache and try again

### Issue: Assets not loading (404 errors)
**Solution:**
- Verify the `base` path in `vite.config.js`
- Check that asset paths use relative imports: `import logo from './assets/logo.svg'`
- Don't use absolute paths like `/assets/logo.svg`

### Issue: Routing not working (404 on refresh)
**Solution:**
- GitHub Pages doesn't support client-side routing by default
- Use HashRouter instead of BrowserRouter:
```js
import { HashRouter } from 'react-router-dom'

// In your main.jsx or App.jsx
<HashRouter>
  {/* Your routes */}
</HashRouter>
```

### Issue: `gh-pages` deployment fails
**Solution:**
- Ensure you're committed to git: `git add . && git commit -m "update"`
- Check you have permissions to the repository
- Try: `npm cache clean --force && npm install`

---

## Continuous Deployment

### Automatic Deployment on Push
Every time you want to update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

---

## Tips for a Great Portfolio

1. **Keep it Simple**: Don't overcomplicate the design
2. **Mobile Responsive**: Test on different screen sizes
3. **Fast Loading**: Optimize images and minimize bundle size
4. **Clear CTA**: Make it easy to contact you
5. **Show Your Best Work**: Quality over quantity for projects
6. **SEO**: Add proper meta tags in `index.html`
7. **Analytics**: Consider adding Google Analytics

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

---

## Custom Domain (Optional)

If you have a custom domain:

1. In your `public` folder, create a file named `CNAME`
2. Add your domain: `www.yourdomain.com`
3. Update `vite.config.js`: set `base: '/'`
4. Configure DNS settings with your domain provider
5. Deploy: `npm run deploy`

**Brief Explanation:** GitHub Pages supports custom domains. The `CNAME` file tells GitHub what domain to use, and your DNS needs to point to GitHub's servers.

---

## Next Steps

1. ✅ Set up the project with Vite
2. ✅ Build your portfolio components
3. ✅ Configure for GitHub Pages
4. ✅ Deploy and test
5. ✅ Share your portfolio with the world!

Good luck with your portfolio! 🚀

