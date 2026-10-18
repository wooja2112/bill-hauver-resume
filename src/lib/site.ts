export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return new URL(configured);

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) return new URL(`https://${productionHost}`);

  const previewHost = process.env.VERCEL_URL;
  if (previewHost) return new URL(`https://${previewHost}`);

  return new URL("http://localhost:3000");
}
