# Bill Hauver résumé

Personal résumé site built with the Next.js App Router, React server components, and Tailwind CSS 4.

Type is loaded with `next/font`: Libre Franklin for display, IBM Plex Sans for body, and IBM Plex Mono for labels.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run start
```

## Edit the résumé

Copy, roles, and recommendations live in `src/lib/resume.ts`. `src/app/page.tsx` stacks the sections.

| Path | What it is |
| --- | --- |
| `public/bill-hauver.jpg` | Portrait in the hero |
| `public/Bill-Hauver-Resume.docx` | Résumé download |
| `src/app/opengraph-image.jpg` | Link-preview image |
| `src/app/twitter-image.jpg` | Same preview for Twitter cards |

## Share URL

Canonical and Open Graph URLs need an absolute origin. Set `NEXT_PUBLIC_SITE_URL` to the production site, for example `https://example.com`.

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used when that variable is unset. Locally, the origin falls back to `http://localhost:3000`.
