# 🚀 Deployment Guide

This guide shows you how to deploy your project to various hosting platforms.

## 📋 Prerequisites

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Your built files are in the `dist/` folder:**
   - `index.html`
   - `dist/index.js`
   - `dist/styles/main.css`

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Step 1: Create GitHub Repository**
1. Go to [GitHub](https://github.com) and create a new repository
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Krystian124/strona-dla-ojca.git
   git push -u origin main
   ```

**Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to main

**Step 3: Access Your Site**
Your site will be available at: `https://Krystian124.github.io/strona-dla-ojca`

---

### Option 2: Netlify (Free & Easy)

**Step 1: Deploy via Netlify UI**
1. Go to [Netlify](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

**Step 2: Access Your Site**
Netlify will give you a URL like: `https://your-site-name.netlify.app`

---

### Option 3: Vercel (Free & Easy)

**Step 1: Deploy via Vercel**
1. Go to [Vercel](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

**Step 2: Access Your Site**
Vercel will give you a URL like: `https://your-project.vercel.app`

---

### Option 4: Traditional Web Server

**Step 1: Upload Files**
1. Upload the entire `dist/` folder to your web server
2. Upload `index.html` to the root directory

**Step 2: Configure Server**
Make sure your server serves `index.html` for all routes (SPA routing).

---

## 🔧 Manual Deployment Steps

If you want to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files to your server:**
   - Upload `index.html` to your web root
   - Upload the entire `dist/` folder to your web root

3. **Configure your web server** to serve static files

## 🌍 Custom Domain

All platforms above support custom domains:
- **GitHub Pages:** Settings → Pages → Custom domain
- **Netlify:** Domain settings → Add custom domain
- **Vercel:** Settings → Domains → Add domain

## 📊 Performance Tips

1. **Enable compression** on your server
2. **Set proper cache headers** for static assets
3. **Use a CDN** for better global performance
4. **Optimize images** if you add any

## 🆘 Troubleshooting

**Common Issues:**
- **404 errors:** Make sure your server serves `index.html` for all routes
- **Missing styles:** Check that CSS file paths are correct
- **JavaScript errors:** Ensure all JS files are properly loaded

**Need Help?**
- Check the platform's documentation
- Look at the deployment logs
- Verify your build output in the `dist/` folder 