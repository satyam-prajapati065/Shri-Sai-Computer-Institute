# Frontend - Shri Sai Computer Institute

This folder contains the modern React + Vite frontend application, ready to deploy to **Netlify**.

## Netlify Deployment Steps:

### Option 1: Deploy via GitHub (Recommended)
1. Push your repository to GitHub.
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select your GitHub repository.
4. Set the build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (or `frontend/dist`)
5. (Optional) Under **Environment variables**, set:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://your-backend.onrender.com`)
6. Click **"Deploy site"**.

### Local Development
```bash
cd frontend
npm install
npm run dev
```
