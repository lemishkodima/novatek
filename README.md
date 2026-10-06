# NOVATEK International website

English multi-page corporate website for NOVATEK International, built with Next.js and prepared for a manual Vercel deployment.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local address shown in the terminal.

## Deploy to Vercel manually

1. Create a Git repository from this folder and push it to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected Next.js framework settings and deploy. No environment variables are required.

The project uses Next.js static export, so the production build is exported to `out/`. Vercel can build it directly from the repository. All meeting and project buttons open a pre-addressed email to `sergey@novatek-international.com` until a booking calendar is available.

## Content and assets

Page copy is organized in `app/content.ts`. Replace the contact details there and in `app/components/SiteChrome.tsx` if they change. Generated project imagery is stored in `public/images/`.
