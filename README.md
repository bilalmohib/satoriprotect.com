# satoriprotect.com redirect service

This project is a minimal Next.js app used only to handle path-based redirects for `satoriprotect.com`.

## Redirect behavior

Configured in `next.config.ts`:

- `/help` -> `https://support.beyondintelligence.ai`
- `/help/:path*` -> `https://support.beyondintelligence.ai/:path*`
- all other routes (`/:path*`) -> `https://beyondintelligence.ai`

All redirects are permanent (`308`).

## Local development

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Production setup (Vercel + GoDaddy DNS)

1. Deploy this project to Vercel.
2. Add domains in Vercel: `satoriprotect.com` and `www.satoriprotect.com`.
3. In GoDaddy DNS, remove domain forwarding and set:
   - `A` record: `@` -> `76.76.21.21`
   - `CNAME`: `www` -> `cname.vercel-dns.com`

Do not combine GoDaddy forwarding with DNS-based Vercel routing.
