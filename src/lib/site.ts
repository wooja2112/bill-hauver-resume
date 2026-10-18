export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return new URL(configured);
  return new URL("http://localhost:3000");
}

export function assetPath(path: string): string {
  const base = process.env.PAGES_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function absoluteUrl(path: string): string {
  return new URL(assetPath(path), getSiteUrl().origin).href;
}
