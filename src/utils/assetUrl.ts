/**
 * Resolves static asset paths taking into account Vite's base path
 * (crucial for GitHub Pages subpaths like /shubham-tejal-engagement/).
 */
export function getAssetUrl(path?: string): string {
  if (!path) return '';
  // If it's already an absolute URL or data URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\.?\//, '');

  return `${cleanBase}${cleanPath}`;
}
