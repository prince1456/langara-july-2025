# CleverSearch Test Script

## Quick Deployment Instructions

1. **Clone this repository**

   ```bash
   git clone <this-repo-url>
   cd cleversearch-test-script
   ```

2. **Create your own new repository** on GitHub

3. **Remove existing git history and initialize new repo**

   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Push code to your new repository**

   ```bash
   git remote add origin <your-new-repo-url>
   git branch -M main
   git push -u origin main
   ```

5. **Deploy to Vercel**
   - Open [vercel.com](https://vercel.com) in your browser
   - Sign in with your GitHub account
   - Click "New Project" and import your repository
   - Deploy with default settings

**Note:** After deployment, get your script ID from your CleverSearch dashboard for the site you added, then update the script in `layout.tsx` with your SITE_ID and push your changes:

```jsx
<Script
  id="clever-search-tracker"
  src="http://backend.cleversearch.ai/tracker/v1/tracker.js"
  data-config={JSON.stringify({
    "API_BASE": "http://backend.cleversearch.ai",
    "SITE_ID": "709640e5-d3c0-4b9d-a4df-f7782db7e051", // Replace with your site ID
    "VERSION": "1.0.0",
    "RETRY_ATTEMPTS": 3,
    "TIMEOUT": 2000,
    "UPDATE_INTERVAL": 500,
    "MAX_INTERVAL_DURATION": 120000,
    "FAST_MODE": true
  })}
  async
  strategy="beforeInteractive"
/>
```