# 2026.09 — Maintenance release

- Maintenance review of limenis-website — a marketing site for Limenis Global Advisory Inc., a maritime, port-operations and supply-chain consulting firm.
- Stack per README: Next.js 14 App Router, Tailwind CSS v3, Framer Motion, Lucide icons, Playfair Display + DM Sans via `next/font/google`. Single-page composition (`app/page.tsx`) built from section components — Hero, StatsBar, Services, WhyLimenis, Insights, BookingForm, Newsletter, Header, Footer.
- Status: repo still sits on its initial commit (February 2026); no further code changes since. README documents a generic "deploy to Vercel" path and states no live URL, so no deployment is claimed here.
- Reviewed September 2026: docs refreshed, CHANGELOG started, package version bumped, versioned as v2026.09. No site code touched.
- Known gaps: no LICENSE file (README carries an all-rights-reserved copyright line instead); no CHANGELOG before this release; README install snippet still points at a `your-username` placeholder clone URL; no tests and no CI workflow in the repo.
