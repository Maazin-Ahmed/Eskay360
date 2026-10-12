# Eskay Digital 360

Modern frontend rebuild for Eskay Digital 360 built with React 19, TypeScript, Tailwind CSS, Motion, and Vite.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Linter**: Oxlint

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run static analysis
npm run lint

# Build for production
npm run build
```

## Vercel Deployment

This project is configured for Vercel deployment with:
- Client-side SPA routing rewrites configured in `vercel.json` (`/(.*)` -> `/index.html`)
- Long-term caching headers for immutable production assets (`/assets/*`)
- Standard security headers (Content Type Options, Frame Options, Referrer Policy)

### Option 1: Git Integration (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "Initial commit of Eskay Digital 360 rebuild"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. Vercel automatically detects the Vite framework and applies the settings from `vercel.json`.
4. Click **Deploy**.

### Option 2: Deploy with Vercel CLI
Run from the root directory:
```bash
npx vercel
```
For production deployment:
```bash
npx vercel --prod
```
# Eskay360
# Eskay360
