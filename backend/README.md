# Backend - Shri Sai Computer Institute

This folder contains the Node.js / Express API backend ready to deploy on **Render**.

## Render Deployment Steps:

1. Push your repository to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **"New +" > "Web Service"**.
3. Connect your GitHub repository.
4. Fill in the following settings:
   - **Name:** `shri-sai-backend` (or your choice)
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
5. Under **Environment Variables**:
   - `CLIENT_URL`: `*` (or your Netlify site URL like `https://your-site.netlify.app`)
6. Click **"Create Web Service"**.
7. Copy your backend URL (e.g., `https://shri-sai-backend.onrender.com`) and add it to your Netlify frontend environment variable `VITE_API_URL`.

## API Endpoints:
- `GET /api/health` - Server health check & status
- `POST /api/enquiries` - Submit admission enquiry & get WhatsApp confirmation
- `GET /api/enquiries` - View recent enquiries
