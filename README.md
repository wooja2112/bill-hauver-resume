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
```

`npm run build` writes a static site to `out`.

## Edit the résumé

Copy, roles, and recommendations live in `src/lib/resume.ts`. `src/app/page.tsx` stacks the sections.

| Path | What it is |
| --- | --- |
| `public/bill-hauver.jpg` | Portrait in the hero |
| `public/Bill-Hauver-Resume.pdf` | Résumé download |
| `public/Bill-Hauver-Resume.docx` | Editable source for the PDF |
| `public/opengraph-image.jpg` | Link-preview image |
| `public/us-air-force-symbol.svg` | Air Force symbol |

## Publish

Pushes to `master` deploy the static site to GitHub Pages. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The published site is [https://wooja2112.github.io/bill-hauver-resume/](https://wooja2112.github.io/bill-hauver-resume/).

The workflow sets the site origin from GitHub Pages. A local build uses `http://localhost:3000`.
